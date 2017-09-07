using Microsoft.AspNet.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Threading.Tasks;
using ChatProto.Utilities;

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
            return base.OnDisconnected(stopCalled);
        }

        public override Task OnReconnected()
        {
            return base.OnReconnected();
        }
    }
}