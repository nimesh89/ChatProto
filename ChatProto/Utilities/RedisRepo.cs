using StackExchange.Redis;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ChatProto.Utilities
{
    public class RedisRepo
    {
        private readonly ConnectionMultiplexer _multiplexer;

        public RedisRepo(ConnectionMultiplexer multiplexer)
        {
            _multiplexer = multiplexer;
        }
    }
}