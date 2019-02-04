using System;
using System.Collections.Generic;
using System.Text;

namespace input_restrictions_dal.Dto
{
    public class MasterData
    {
        public IEnumerable<DropDownField> Gender { get; set; }
        public IEnumerable<PostalCodefield> PostalCode { get; set; }
    }

    public class DropDownField
    {
        public int Id { get; set; }
        public string Value { get; set; }
    }

    public class PostalCodefield
    {
        public int Id { get; set; }
        public string Code { get; set; }
        public string City { get; set; }
    }
}
