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

		[HttpGet("sub/{firstNumber}/{secondNumber}")]
		public IActionResult Sub(string firstNumber, string secondNumber)
		{
			if(IsNumeric(firstNumber) && IsNumeric(secondNumber))
			{
				var sub = ConvertToDecimal(firstNumber) - ConvertToDecimal(secondNumber);
				return Ok(sub.ToString());
			}

			return BadRequest("Invalid input");
		}

		[HttpGet("mult/{firstNumber}/{secondNumber}")]
		public IActionResult Mult(string firstNumber, string secondNumber)
		{
			if(IsNumeric(firstNumber) && IsNumeric(secondNumber))
			{
				var mult = ConvertToDecimal(firstNumber) * ConvertToDecimal(secondNumber);
				return Ok(mult.ToString());
			}

			return BadRequest("Invalid input");
		}

		[HttpGet("div/{firstNumber}/{secondNumber}")]
		public IActionResult Div(string firstNumber, string secondNumber)
		{
			if (IsNumeric(firstNumber) && IsNumeric(secondNumber))
			{
				var div = ConvertToDecimal(firstNumber) / ConvertToDecimal(secondNumber);
				return Ok(div.ToString());
			}

			return BadRequest("Invalid input");
		}

		[HttpGet("sqrt/{number}")]
		public IActionResult Sqrt(string number)
		{
			if (IsNumeric(number))
			{
				var sqrt = Math.Sqrt(ConvertToDouble(number));
				return Ok(sqrt.ToString());
			}

			return BadRequest("Invalid input");
		}

		[HttpGet("mean/{firstNumber}/{secondNumber}")]
		public IActionResult Mean(string firstNumber, string secondNumber)
		{
			if(IsNumeric(firstNumber) && IsNumeric(secondNumber))
			{
				var mean = (ConvertToDecimal(firstNumber) + ConvertToDecimal(secondNumber)) / 2;
				return Ok(mean.ToString());
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
