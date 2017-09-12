using Microsoft.AspNet.SignalR;
using StackExchange.Redis;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ChatProto.Utilities
{
    public class RedisRepo
    {
        private const int Db = 11;
        private readonly ConnectionMultiplexer _multiplexer;
        private static RedisRepo _instance;

        public static RedisRepo Instance { get => _instance; }

        private RedisRepo(ConnectionMultiplexer multiplexer)
        {
            _multiplexer = multiplexer;
        }

        public static RedisRepo GetInstance(ConnectionMultiplexer multiplexer, Action<RedisChannel, RedisValue> callback)
        {
            if(_instance == null)
            {
                _instance = new RedisRepo(multiplexer);
                _instance.StartKeyxpiryListner(callback);
            }

            return _instance;
        }

        public void UserDisconnected(string userid)
        {
            this._multiplexer.GetDatabase(Db).StringSet(userid, DateTime.Now.ToBinary(), TimeSpan.FromSeconds(30));
        }

        private void StartKeyxpiryListner(Action<RedisChannel, RedisValue> callback)
        {
            string notificationChannel = "__keyspace@" + Db + "__:*";
            this._multiplexer.GetSubscriber().Subscribe(notificationChannel, (channel, notificationType) => {
                callback.Invoke(channel, notificationType);
            });
        }
    }
}