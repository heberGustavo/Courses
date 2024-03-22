using Microsoft.AspNetCore.Mvc;

namespace _01_Calculator.Controllers
{
	[ApiController]
	[Route("[controller]")]
	public class CalculatorController : ControllerBase
	{
		private readonly ILogger<CalculatorController> _logger;

		public CalculatorController(ILogger<CalculatorController> logger)
		{
			_logger = logger;
		}

		[HttpGet("sum/{firstNumber}/{secondNumber}")]
		public IActionResult Sum(string firstNumber, string secondNumber)
		{
			if(IsNumeric(firstNumber) && IsNumeric(secondNumber))
			{
				var sum = ConvertToDecimal(firstNumber) + ConvertToDecimal(secondNumber);
				return Ok(sum.ToString());
			}

			return BadRequest("Invalid input"); 
		}

		#region Private Methods

		private decimal ConvertToDecimal(string strNumber)
		{
			return Convert.ToDecimal(strNumber);
		}

		private double ConvertToDouble(string strNumber)
		{
			return Convert.ToDouble(strNumber);
		}

		private bool IsNumeric(string strNumber)
		{
			double number;
			var isNumeric = double.TryParse(
				strNumber,
				System.Globalization.NumberStyles.Any,
				System.Globalization.NumberFormatInfo.InvariantInfo,
				out number
				);
			return isNumeric;
		}

		#endregion

	}
}
