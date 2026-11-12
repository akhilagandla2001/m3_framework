export class login{
   #username 
   #password
   #loginbtn
   constructor(page){
    this.page=page
    this.#username = page.locator('//input[@name="user_name"]')
    this.#password = page.locator('//input[@name="user_password"]')
    this.#loginbtn = page.locator('//input[@id="submitButton"]')
   }
   async launch(url){
     await this.page.goto(url)
   }
   async actions(username,password){
       await this.#username.fill(username)
       await this.#password.fill(password)
       await this.#loginbtn.click()
   }
}