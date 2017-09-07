using Microsoft.Owin;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Threading.Tasks;
using System.Security.Claims;

namespace ChatProto.Middleware
{
    public class AuthenticationMidleware : OwinMiddleware
    {
        public AuthenticationMidleware(OwinMiddleware next): base(next)
        {
        }

        public async override Task Invoke(IOwinContext context)
        {
            if (context.Request.QueryString.HasValue && !string.IsNullOrEmpty(context.Request.Query["op"]))
            {
                var identity = new ClaimsIdentity();
                var name = context.Request.Query["op"];
                identity.AddClaim(new Claim("Name", name));
                context.Authentication.User = new ClaimsPrincipal(identity);
            }

            await Next.Invoke(context);
        }
    }
}