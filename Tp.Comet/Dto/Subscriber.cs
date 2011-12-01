using System;
using System.Collections.Generic;
using System.Runtime.Serialization;

namespace Tp.Comet.Dto
{
    [DataContract]
    public class Subscriber
    {
        readonly List<Message> _messages = new List<Message>();

        public Subscriber()
        {
            SubscriberId = Guid.NewGuid();
        }

		public string LastMessageId { get; set; }
		public string ReturnAddress { get; set; }

        [DataMember]
        public List<Message> Messages
        {
            get { return _messages; }
        }

        [DataMember]
        public Guid SubscriberId { get; private set; }
        [DataMember]
        public string Name { get; private set; }

    }
}