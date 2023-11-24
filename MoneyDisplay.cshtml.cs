using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace DisasterAlleviationFoundation.Pages
{
    public class MoneyDisplayModel : PageModel
    {
        private readonly ILogger<MoneyDisplayModel> _logger;

        public MoneyDisplayModel(ILogger<MoneyDisplayModel> logger)
        {
            _logger = logger;
        }

        public void OnGet()
        {
        }
    }
}