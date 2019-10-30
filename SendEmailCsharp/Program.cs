using System;
using System.Threading.Tasks;
using SendGrid;
using SendGrid.Helpers.Mail;

namespace SendEmailCsharp
{
    class Program
    {
        static void Main(string[] args)
        {
            Execute().Wait();
        }

        static async Task Execute() {
            var apiKey = Environment.GetEnvironmentVariable("SENGRID_API_KEY");
            var client = new SendGridClient(apiKey);
            var from = new EmailAddress("futbolonline58@gmail.com", "futbol");
            var to = new EmailAddress("michaelp221117@gmail.com", "Michael");
            var subject = "Sending with Twilio Sendgrid is fun";
            var PlainTextContent = "and easy to do anywhere, even width C#!";
            var htmlContent = "<strong>and easy to do anywhere, even width C#!</strong>";
            var msg = MailHelper.CreateSingleEmail(
                from,
                to,
                subject,
                PlainTextContent,
                htmlContent
            );
            var response = await client.SendEmailAsync(msg);
        }
    }
}
