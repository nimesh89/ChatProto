using Microsoft.Ajax.Utilities;
using Microsoft.AspNet.SignalR.Hubs;

namespace ChatProto.Utilities
{
    public class SignalRMinifier : IJavaScriptMinifier
    {
        public string Minify(string source)
        {
            return new Minifier().MinifyJavaScript(source);
        }
    }
}