using System;
using System.Collections.Generic;
using System.Text;

namespace input_restrictions_dal
{
    class MasterData
    {
        public IEnumerable<DropDownField> Gender { get; set; }
        public IEnumerable<PostalCodefield> PostalCode { get; set; }
    }

    class DropDownField
    {
        public int Id { get; set; }
        public string Value { get; set; }
    }

    class PostalCodefield
    {
        public int Id { get; set; }
        public string Code { get; set; }
        public string City { get; set; }                                                                              
    }

}
