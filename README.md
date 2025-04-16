https://squia.vercel.app/admin/add-client                      
https://squia.vercel.app/admin/add-order                      
https://squia.vercel.app/admin/clients                        
https://squia.vercel.app/admin/interviews                      
https://squia.vercel.app/admin/interviews/add-interview        
https://squia.vercel.app/admin/orders                        
https://squia.vercel.app/admin/pricing                         
https://squia.vercel.app/admin/reports                         
https://squia.vercel.app/admin/settings                        
https://squia.vercel.app/admin/users                          
https://squia.vercel.app/admin/whatsapp                        
https://squia.vercel.app/admin/workers                         
https://squia.vercel.app/admin/workers/[workerId]             
https://squia.vercel.app/admin/workers/add-worker              
https://squia.vercel.app/client                               
https://squia.vercel.app/client/interviews                     
https://squia.vercel.app/client/interviews/add-interview    
https://squia.vercel.app/client/orders                       
https://squia.vercel.app/client/orders/add-order            
https://squia.vercel.app/client/workers                                
https://squia.vercel.app/worker                                
https://squia.vercel.app/worker/assistant                     
https://squia.vercel.app/worker/interviews                    
https://squia.vercel.app/worker/profile                    




Global endpoint
Test : https://api-test.noonpayments.com/payment/v1/
Live : https://api.noonpayments.com/payment/v1/
KSA endpoint
Test : https://api-test.sa.noonpayments.com/payment/v1/
Live : https://api.sa.noonpayments.com/payment/v1/



BusinessIdentifier
QATAKO



Exponent
65537



MODULES
gFbwUppywIGFPsgeXpWzdhoq2Bnp8nCwbyVVKcMslnwrWHSFk97EwLL79DV43otqCINVQygBBytByksb13JtBro7VHizUnJhEgc8J2C2usod4ukI5GIaduTRjErGHOdCMhdLblNjSqzZf0n6UVGrKZlz3pnJg34jvQ4ipJflZs1CjqmqH5nkSMfHQRV5TEHckHPB2yH/9soYL+V7rMeIqkID9l3yjpmblznGwOsLwsDCFXyruX+ukdN4pRZk3sJ3BLZqX0WRdFTzXnS+XeOB8oYSlfzD10FgZWqZ/s38hVbeD5fKpkNBYwexPOkkwrP3M4td2wpG9/Qa7hl3LXtILQ==



Public Key

-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAgFbwUppywIGFPsgeXpWz
dhoq2Bnp8nCwbyVVKcMslnwrWHSFk97EwLL79DV43otqCINVQygBBytByksb13Jt
Bro7VHizUnJhEgc8J2C2usod4ukI5GIaduTRjErGHOdCMhdLblNjSqzZf0n6UVGr
KZlz3pnJg34jvQ4ipJflZs1CjqmqH5nkSMfHQRV5TEHckHPB2yH/9soYL+V7rMeI
qkID9l3yjpmblznGwOsLwsDCFXyruX+ukdN4pRZk3sJ3BLZqX0WRdFTzXnS+XeOB
8oYSlfzD10FgZWqZ/s38hVbeD5fKpkNBYwexPOkkwrP3M4td2wpG9/Qa7hl3LXtI
LQIDAQAB
-----END PUBLIC KEY-----





ApplicationIdentifier
nest-api


App key
f6deb890d55846358d7aec03a7c70f3e



Formatting Http Authorization Header
The Http Authorization header should be formatted as described below:

Key Base64(BusinessIdentifier.ApplicationIdentifier:ApplicationKey)
Where

Key: is the mandatory scheme type
Base64: is the encoding in Base64, with padding, of the below values:
BusinessIdentifier: is the unique identifier associated to your business, it is mentioned also in the initial setup email; refer the Merchant Portal User's Guide in the section Account Settings > Applications
ApplicationIdentifier: refer the Merchant Portal User's Guide in the section Account Settings > Applications > + Application
ApplicationKey: refer the Merchant Portal User's Guide in the section Account Settings > Applications > Key Details
