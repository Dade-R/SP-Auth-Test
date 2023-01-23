# SP-Auth-Test
## This project is to test SharePoint Online app-only auth from a node.js script.  
### Follow these steps to generate a Client Id & Client Secret:  
<br>

 1. Clone this repo locally
     - `git clone https://github.com/Dade-R/SP-Auth-Test.git C:\code\sp-auth-test`
 2. Install the node packages
     - `npm i`
 3. Generate a Client ID/Secret  
     - **Official Documentation**: [Granting access using SharePoint App-Only](https://docs.microsoft.com/en-us/sharepoint/dev/solution-guidance/security-apponly-azureacs)  
     - Visit the Site Url - `https://tenant.sharepoint.com/sites/web/_layouts/15/appregnew.aspx`  
     - Or the Tenant Url - `https://tenant-admin.sharepoint.com/_layouts/15/appregnew.aspx`  
     - Client Id - Click the "Generate" button & save it in the index.js file on line 12 - `C:\code\sp-auth-test\index.js`  
     - Client Secret - Click the "Generate" button & save it in the index.js file on line 13 - `C:\code\sp-auth-test\index.js` 
     - Title - *(The name of your application)* - `SP-Auth-Test`  
     - App Domain - *(This is a required field and can contain any domain name)* `www.localhost.com`  
     - Redirect URI - *(This is a required field and can contain any https url)* `https://www.localhost.com`  
     - Click the "Create" button
 4. Create the permission request in the admin site  
     - Visit the Site Url - `https://tenant.sharepoint.com/sites/web/_layouts/15/appinv.aspx`  
     - Or the Tenant Url - `https://tenant-admin.sharepoint.com/_layouts/15/appinv.aspx`  
     - Paste the "Client Id" from step 3 as the "App Id" value and click the "Lookup" button to query the app details  
 5. Apply the following Permission Request *(Example below)*  
     - Paste the XML code below into the Permission Request XML field  
     - Make any changes required to the Permission Request XML field based on the following possible permissions:
       - Scopes: tenant, sitecollection, sitecollection/web, sitecollection/web/list (Multiple Allowed)  
       - Rights: Read, Write, Manage, FullControl  
     - Click the "Create" button  
```
<AppPermissionRequests AllowAppOnlyPolicy="true">
  <AppPermissionRequest Scope="http://sharepoint/content/sitecollection" Right="Read"/>
</AppPermissionRequests>
```   
 6. Approve the permission request  
     - Review the permissions being granted to the application, to the left of the app icon  
     - Click the "Trust It" button
 7. Verify the permission requests  
     - Visit the Site Url - `https://tenant.sharepoint.com/sites/web/_layouts/15/appprincipals.aspx`  
     - Or the Tenant Url - `https://tenant-admin.sharepoint.com/_layouts/15/ta_allappprincipals.aspx`  
     - Review the App Permissions  
       - **Warning** - Do not remove the `Office 365 SharePoint Online` App Permissions
 8. Test the application
     - Press F5