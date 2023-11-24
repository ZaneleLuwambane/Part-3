using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace DisasterAllevia0ionFoundation.Pages
{
    public class DonateGoodsModel : PageModel
    {
        private const string V = "";
        public bool hasData = false;
        public String donationdate = "";
        public string donationamount = "";


        public void OnGet()
        {
        }

        public void OnPost() {
        
            hasData = true;
            donationdate = Request.Form["donation-date"];
            donationamount = Request.Form["donation-amount"];
        }
    }
}