using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ChatProto.Models
{
    public class VisitorViewModel
    {
        public VisitorModel GetModelForNewVisitor()
        {
            return new VisitorModel() { VisitorId = Guid.NewGuid() };
        }
    }
}