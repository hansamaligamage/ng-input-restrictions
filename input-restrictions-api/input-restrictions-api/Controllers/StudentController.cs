using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using input_restrictions_api.Service;
using input_restrictions_dal.Dto;
using System.Net;

namespace input_restrictions_api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StudentController : ControllerBase
    {

        private IStudentService _studentService;

        public StudentController()
        {
            _studentService = new StudentService();
        }

        [HttpGet("masterdata")]
        [ProducesResponseType(typeof(MasterData), (int)HttpStatusCode.OK)]
        [ProducesResponseType((int)HttpStatusCode.NotFound)]
        public ActionResult MasterData()
        {
            MasterData masterData = _studentService.GetMasterData();
            return Ok(masterData);
        }

    }
}