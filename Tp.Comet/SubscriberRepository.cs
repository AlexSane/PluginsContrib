using System;
using System.Collections.Generic;
using Tp.Comet.Commands;
using Tp.Comet.Dto;

namespace Tp.Comet
{
    public class SubscriberRepository
    {
        static readonly Dictionary<Guid, Subscriber> _subscribers = new Dictionary<Guid, Subscriber>();

        public static void AddSubscriber(Subscriber subscriber)
        {
            _subscribers.Add(subscriber.SubscriberId, subscriber);
        }

        public static Subscriber GetSubscriber(Guid subscriberId)
        {
            return _subscribers[subscriberId];
        }

        public static void AddMessage(Message msg)
        {
            foreach (var subscriber in _subscribers)
            {
                subscriber.Value.Messages.Add(msg);
            }
        }
    }
}