using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading;
using NServiceBus;
using Tp.Integration.Common;
using Tp.Integration.Messages.EntityLifecycle.Messages;

namespace Tp.Search
{
    public class UserStoryHandler : IHandleMessages<UserStoryCreatedMessage>
    {
        private string _indexPath = "./index";
        public void Handle(UserStoryCreatedMessage message)
        {
            
//            var fsDirectory = FSDirectory.Open(new DirectoryInfo(_indexPath));
//            
//            var writer = new IndexWriter(fsDirectory, new StandardAnalyzer(Version.LUCENE_CURRENT), !System.IO.Directory.Exists(_indexPath), new IndexWriter.MaxFieldLength(1000000));
//            
//            writer.SetWriteLockTimeout(10000);
//            
//            var doc = new Document();
//            
//            doc.Add(new Field("ID", message.Dto.ID.ToString(), Field.Store.YES, Field.Index.NOT_ANALYZED));
//
//            var parser = new HTMLParser(new MemoryStream(Encoding.UTF8.GetBytes(message.Dto.Description)));
//            doc.Add(new Field("description", parser.GetReader()));
//            doc.Add(new Field("summary", parser.GetSummary(), Field.Store.YES, Field.Index.NO));
//            doc.Add(new Field("title", message.Dto.Name, Field.Store.YES, Field.Index.ANALYZED));
//
//            writer.AddDocument(doc);
//            writer.Commit();
//            writer.Close();
//            fsDirectory.Close();
//            IndexWriter.Unlock(fsDirectory);
        }
    }
}
