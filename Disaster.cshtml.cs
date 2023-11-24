using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace DisasterAlleviationFoundation.Pages
{
    public class DisasterModel : PageModel
    {
        private readonly ILogger<DisasterModel> _logger;

        public DisasterModel(ILogger<DisasterModel> logger)
        {
            _logger = logger;
        }

        public void OnGet()
        {
        }
    }
}