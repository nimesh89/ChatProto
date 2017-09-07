using Microsoft.AspNet.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Web;

namespace ChatProto
{
    public class ChatUserIdProvider : IUserIdProvider
    {
        public string GetUserId(IRequest request)
        {
            return ((ClaimsIdentity)request.User.Identity)?.Claims?.FirstOrDefault(c => c.Type == "Name")?.Value;
        }
    }
}