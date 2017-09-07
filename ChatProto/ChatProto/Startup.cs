using ChatProto.Utilities;
using Microsoft.AspNet.SignalR;
using Microsoft.AspNet.SignalR.Hubs;
using Owin;
using System.Web.Mvc;
using System.Web.Optimization;
using System.Web.Routing;

namespace ChatProto
{
    public class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            AreaRegistration.RegisterAllAreas();
            RouteConfig.RegisterRoutes(RouteTable.Routes);
            app.MapSignalR();
            GlobalHost.DependencyResolver.Register(typeof(IJavaScriptMinifier), () => new SignalRMinifier());
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