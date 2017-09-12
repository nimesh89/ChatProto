using Microsoft.AspNet.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Threading.Tasks;
using ChatProto.Utilities;
using System.Security.Claims;

namespace ChatProto
{
    public class ChatHub : Hub
    {
        private readonly RedisRepo _cacheRepo;

        public ChatHub(RedisRepo redisRepo)
        {
            _cacheRepo = redisRepo;
        }

        public override Task OnConnected()
        {
            return base.OnConnected();
        }

        public override Task OnDisconnected(bool stopCalled)
        {
            var user = this.Context.User;
            this._cacheRepo.UserDisconnected((user.Identity as ClaimsIdentity).Claims.First(c => c.Type == "Name").Value);
            return base.OnDisconnected(stopCalled);
        }

        public override Task OnReconnected()
        {
            return base.OnReconnected();
        }
    }
}