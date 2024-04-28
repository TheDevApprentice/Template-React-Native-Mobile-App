import { Location } from "../../utils/Types/localisation";
import { ProductInCart } from "../../utils/Types/product";
import { Friend, User } from "../../utils/Types/user";
import { Badge } from "../../utils/Types/Badge/badge";
import { Transactions } from "../../utils/Types/transaction";

export type GlobalContextProviderType = {
	auth: any; 
	userData: User;
	setUserData: any;
	
  };
  
 