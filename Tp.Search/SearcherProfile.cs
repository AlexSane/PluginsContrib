using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Text;
using Tp.Integration.Plugin.Common;

namespace Tp.Search
{
    [Profile, Serializable, DataContract]
    public class SearcherProfile
    {
        [DataMember]
        public string Name { get; set; }
    }
}
