# SP-Auth-Test
## This project is to test SharePoint app-only auth from a node.js script  

### Follow these steps to generate a Client Id & Client Secret (Authentication URL - login.microsoftonline.com):  
<br>

 1. Generate a Client ID/Secret - Details: [Granting access using SharePoint App-Only](https://docs.microsoft.com/en-us/sharepoint/dev/solution-guidance/security-apponly-azureacs)  
     - Site Url - https://tenant.sharepoint.com/sites/web/_layouts/15/appregnew.aspx  
     - Tenant Url - https://tenant-admin.sharepoint.com/_layouts/15/appregnew.aspx  
     -  Client Id - Click "Generate" button  
     -   Client Secret - Click "Generate" button  
     -   Title - Name of your application  
     -   App Domain - www.localhost.com  
     -   Redirect URI - https://www.localhost.com  
 2. Create the request in the admin site  
     - Site - https://tenant.sharepoint.com/sites/web/_layouts/15/appinv.aspx  
     - Tenant - https://tenant-admin.sharepoint.com/_layouts/15/appinv.aspx  
     - Use "Client Id" as the "App Id" value and click "Lookup" to find app information  
 3. Apply the following Permission (Example shown below)  
     - Possible permissions  
       - Scopes: tenant, sitecollection, sitecollection/web, sitecollection/web/list (Multiple Allowed)  
       - Rights: Read, Write, Manage, FullControl  
```
<AppPermissionRequests AllowAppOnlyPolicy="true">
  <AppPermissionRequest Scope="http://sharepoint/content/sitecollection" Right="Read"/>
</AppPermissionRequests>
```   
 4. Approve the request  
 5. Verify the request  
     - Site - https://tenant.sharepoint.com/sites/web/_layouts/15/appprincipals.aspx  
     - Tenant - https://tenant-admin.sharepoint.com/_layouts/15/ta_allappprincipals.aspx  