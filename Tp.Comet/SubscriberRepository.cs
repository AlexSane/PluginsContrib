using System;
using System.Collections.Generic;
using Tp.Comet.Commands;
using Tp.Comet.Dto;
using Tp.Integration.Messages.Commands;
using Tp.Integration.Plugin.Common;
using Tp.Integration.Plugin.Common.PluginCommand.Embedded;

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

        public static void AddMessage(Message msg, ITpBus bus)
        {
            foreach (var subscriber in _subscribers)
            {
                subscriber.Value.Messages.Add(msg);

				if (!string.IsNullOrEmpty(subscriber.Value.LastMessageId))
				{
					bus.Send(subscriber.Value.ReturnAddress, subscriber.Value.LastMessageId,
					         new PluginCommandResponseMessage() {PluginCommandStatus = PluginCommandStatus.Succeed, ResponseData = subscriber.Value.Serialize()});
					subscriber.Value.LastMessageId = string.Empty;
					subscriber.Value.Messages.Clear();
				}
            }
        }
    }
}