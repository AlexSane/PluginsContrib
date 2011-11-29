// 
// Copyright (c) 2005-2011 TargetProcess. All rights reserved.
// TargetProcess proprietary/confidential. Use is subject to license terms. Redistribution of this file is strictly forbidden.
// 

using System;
using NServiceBus;
using Tp.Integration.Messages.EntityLifecycle.Messages;
using Tp.Integration.Plugin.Common.Storage;
using Twitterizer;

namespace Twitter
{
	public class TweetNewUserStoryHandler : IHandleMessages<UserStoryCreatedMessage>, IHandleMessages<BugCreatedMessage>,
	                                        IHandleMessages<UserStoryUpdatedMessage>, IHandleMessages<BugUpdatedMessage>
	{
		private readonly IStorageRepository _storage;

		public TweetNewUserStoryHandler(IStorageRepository storage)
		{
			_storage = storage;
		}

		public void Handle(UserStoryCreatedMessage message)
		{
			SendTweet("New Story added: " + message.Dto.Name);
		}

		public void Handle(BugCreatedMessage message)
		{
			SendTweet("New Bug found: " + message.Dto.Name);
		}

		public void Handle(UserStoryUpdatedMessage message)
		{
			if (message.Dto.EntityStateName == "Done")
			{
				SendTweet("Story completed: " + message.Dto.Name);
			}
		}

		public void Handle(BugUpdatedMessage message)
		{
			if (message.Dto.EntityStateName == "Closed")
			{
				SendTweet("Bug closed: " + message.Dto.Name);
			}
		}

		private void SendTweet(string tweet)
		{
			var profile = _storage.GetProfile<Profile>();
			var tokens = new OAuthTokens
			             	{
			             		AccessToken = profile.TwitterAccessToken,
			             		AccessTokenSecret = profile.TwitterAccessTokenSecret,
			             		ConsumerKey = "xxx", //TODO : put your value here
								ConsumerSecret = "xxx" //TODO : put your value here
			             	};

			var tweetResponse = TwitterStatus.Update(tokens, tweet);
			Console.WriteLine(tweetResponse.Result == RequestResult.Success
			                  	? "Tweeted successfully!"
			                  	: tweetResponse.ErrorMessage);
		}
	}
}