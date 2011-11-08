using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using hOOt;

namespace Tp.Search
{
	public class IndexHolder
	{
		private static readonly IDictionary<string, Hoot> _storage = new Dictionary<string, Hoot>();
		private const string _indexPath = "./index";

		public static Hoot GetStorage(string accountName)
		{
			if (!_storage.ContainsKey(accountName))
			{
				_storage.Add(accountName, new Hoot(_indexPath, "UserStory"));
			}
			return _storage[accountName];
		}
	}
}
