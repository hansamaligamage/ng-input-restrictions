using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using input_restrictions_dal.Dto;
using input_restrictions_dal.Enum;
using System.Linq;

namespace input_restrictions_api.Service
{
    public class StudentService : IStudentService
    {
        public MasterData GetMasterData()
        {
            MasterData masterData = new MasterData
            {
                Gender = (from Gender g in Enum.GetValues(typeof(Gender))
                                select new
                                {
                                    ID = Convert.ToInt32(g),
                                    Name = g.ToString()
                                }).Select(s => new DropDownField() { Id = s.ID, Value = s.Name }).ToList(),
                PostalCode = new List<PostalCodefield> {  new PostalCodefield {Id =1, Code="00130", City = "Colombo"}, new PostalCodefield { Id = 1, Code = "20000", City = "Kandy" },
                    new PostalCodefield { Id = 1, Code = "80000", City = "Galle" } }
            };
            return masterData;
        }
    }
}
