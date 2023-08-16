import { Data } from "@angular/router";

export class user{
    Id :string ;
	UserName :string ;
	NormalizedUserName :string ;
	Email :string ;
	NormalizedEmail:string ;
	EmailConfirmed:Boolean; 
	PasswordHash :string ;
	SecurityStamp :string ;
	ConcurrencyStamp :string ;
	PhoneNumber :string ;
	PhoneNumberConfirmed :Boolean;
	TwoFactorEnabled :Boolean;
	LockoutEnd: Data;
	LockoutEnabled :Boolean;
	AccessFailedCount : number;
}