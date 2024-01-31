interface Flag {
	png: string;
	svg: string;
}

interface Name{
   common: string,
   official: string, 
}

interface Currency {
	name: string;
	symbol: string;
}

export interface Country {
   borders: string[];
	capital: string[];
	ccn3: string;
	currencies: Record<string, Currency>;
	flags: Flag;
	languages: Record<string, string>;
	name: Name;
	population: number;
	region: string;
	subregion: string;
	tld: string[];
   
}
