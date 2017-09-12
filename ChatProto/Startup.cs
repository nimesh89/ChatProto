using ChatProto.Middleware;
using ChatProto.Utilities;
using Microsoft.AspNet.SignalR;
using Microsoft.AspNet.SignalR.Hubs;
using Owin;
using StackExchange.Redis;
using System.Configuration;
using System.Web.Mvc;
using System.Web.Optimization;
using System.Web.Routing;
using Microsoft.Owin.Extensions;

namespace ChatProto
{
    public class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            app.Use<AuthenticationMidleware>();

            app.UseStageMarker(PipelineStage.Authenticate);

            AreaRegistration.RegisterAllAreas();
            RouteConfig.RegisterRoutes(RouteTable.Routes);
            app.MapSignalR();
            GlobalHost.DependencyResolver.Register(typeof(IJavaScriptMinifier), () => new SignalRMinifier());

            var connection = ConnectionMultiplexer.Connect(ConfigurationManager.AppSettings["RedisConnection"]);


            var redisRepo = RedisRepo.GetInstance(connection, (chanel, value) => {
                GlobalHost.ConnectionManager.GetHubContext<ChatHub>().Clients.All.DisconnectedUser(value);
            });

            GlobalHost.DependencyResolver.Register(typeof(ChatHub), () => new ChatHub(redisRepo));
            GlobalHost.DependencyResolver.Register(typeof(IUserIdProvider), () => new ChatUserIdProvider());

            RegisterBundles(BundleTable.Bundles);
        }

        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/main")
                .Include("~/Scripts/jquery-3.1.1.min.js")
                .Include("~/Scripts/jquery.signalR-2.2.2.min.js")
                .Include("~/Scripts/angular.min.js")
                .Include("~/Scripts/angular-ui/ui-bootstrap-tpls.min.js")
                .Include("~/Scripts/angular-ui-router.min.js"));

            bundles.Add(new ScriptBundle("~/bundles/operator").Include("~/App/operator.*"));
            bundles.Add(new ScriptBundle("~/bundles/visitor").Include("~/App/visitor.*"));

            var styleBundle = new StyleBundle("~/bundles/stylesdeps")
                .Include("~/Content/bootstrap.css")
                .Include("~/Content/ui-bootstrap-csp.css")
                .Include("~/App/styles/main.css");
            styleBundle.Transforms.Add(new CssMinify());
            bundles.Add(styleBundle);
            bundles.Add(new StyleBundle("~/bundles/styles/operator")
                .Include("~/App/styles/operatorStyles.css"));
        }
    }
}