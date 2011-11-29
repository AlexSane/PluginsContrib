using System.Runtime.Serialization;
using Tp.Integration.Plugin.Common;

[assembly: PluginAssembly("Twitter Plugin")]

//If you rename or remove this file, it will be re-created during package update.
namespace Twitter
{
	[Profile, DataContract]
	public class Profile
	{
		// Each storable property should be marked with DataMember attributed
		[DataMember]
		public string TwitterAccount { get; set; }
		[DataMember]
		public string TwitterAccessToken { get; set; }
		[DataMember]
		public string TwitterAccessTokenSecret { get; set; }
	}
}