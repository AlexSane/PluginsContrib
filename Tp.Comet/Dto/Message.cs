using System;
using System.Runtime.Serialization;

namespace Tp.Comet.Dto
{
    [DataContract]
    public class Message
    {
        [DataMember]
        public Guid SubscriberId { get; set; }

        [DataMember]
        public string Text { get; set; }
    }
}