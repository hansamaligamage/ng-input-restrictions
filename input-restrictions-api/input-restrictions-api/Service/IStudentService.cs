using input_restrictions_dal.Dto;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace input_restrictions_api.Service
{
    public interface IStudentService
    {
        MasterData GetMasterData();
    }
}
