window.onload = function () {
	showUserAlerts();
}



function showUserAlerts() {
	var $isEditSuccessfull = $("div#alertUser");

	if ($isEditSuccessfull.length > 0) {
		
		
		var today = new Date().toLocaleDateString();
		// if else use Roze Dua as per date 
		if (today == "04/03/2022") {
			var Roze = "1 Roze Padhne Ki Dua";
			var Dua = "- Aye allah hamari zuban par kalmaye tayyab hamesha jaari rakh."
		}
		else if(today == "4/4/2022") {
			var Roze = "2 Roze Padhne Ki Dua";
			var Dua = "- Aye allah hame kamil eman nasib farma aur puri hidayat ata farma."
		}
		else if(today == "4/5/2022") {
			var Roze = "3 Roze Padhne Ki Dua";
			var Dua = "- Aye allah hame pure ramzan ki neamat anwar wa barkat se malamal farma."
		}
		else if(today == "4/6/2022") {
			var Roze = "4 Roze Padhne Ki Dua";
			var Dua = "-  Aye allah ham par apni rahmat nazil farma karam ki barish farma aur rizik e halal ata farma."
		}
		else if(today == "4/7/2022") {
			var Roze = "5 Roze Padhne Ki Dua";
			var Dua = "-  Aye allah hame deen islam ke ahkam par mukammal tawr par amal karne wala bana de."
		}
		else if(today == "4/8/2022") {
			var Roze = "6 Roze Padhne Ki Dua";
			var Dua = "-   Aye allah tu hame apna mohtaj bana, kisi gayer ka mohotaj na bana."
		}
		else if(today == "4/9/2022") {
			var Roze = "7 Roze Padhne Ki Dua";
			var Dua = "-  Aye allah hame laylatul kadar nasib farma."
		}
		else if(today == "4/10/2022") {
			var Roze = "8 Roze Padhne Ki Dua";
			var Dua = "-  Aye Allah Hame Hajj Maqbool wo Mabroor Naseeb farma."
		}
		else if(today == "4/11/2022") {
			var Roze = "9 Roze Padhne Ki Dua";
			var Dua = "-  Aye allah jhoot,gibat,kina,burai,jhagda,fasaad se dur rakh."
		}
		else if(today == "4/12/2022") {
			var Roze = "10 Roze Padhne Ki Dua";
			var Dua = "-  Aye allah ham se tangdasti,khawf,ghabrahat,aur karaz ke bojh se dur farma."
		}

		else if(today == "4/13/2022") {
			var Roze = "11 Roze Padhne Ki Dua";
			var Dua = "- Aye allah h	amare chhotebade (sagira wa kabeera) tamam gunah ko maaf farma."
		}
		else if(today == "4/14/2022") {
			var Roze = "12 Roze Padhne Ki Dua";
			var Dua = "- Aye allah hame dajjal ke fitne, shaitan aur nafs ke shar se mehfooz rakh."
		}
		else if(today == "4/15/2022") {
			var Roze = "13 Roze Padhne Ki Dua";
			var Dua = "-  Aye allah aurton ko parde ki puri puri pabandi karne ki taufiq ataa farma."
		}
		else if(today == "4/16/2022") {
			var Roze = "14 Roze Padhne Ki Dua";
			var Dua = "-  Aye allah har chote badi bimari se hame aur qul momineen wa mominaat ko mahfuz rakh."
		}
		else if(today == "4/17/2022") {
			var Roze = "15 Roze Padhne Ki Dua";
			var Dua = "-   Aye allah hame huzur akdas sallallah-alaye-wa-sallam ke pyaare tarike par kayam rakh."
		}
		else if(today == "4/18/2022") {
			var Roze = "16 Roze Padhne Ki Dua";
			var Dua = "-  Aye allah hame huzur akdas sallallah-alaye-wa-sallam ki sunnat par chalne ki taufiq ata farma."
		}
		else if(today == "4/19/2022") {
			var Roze = "17 Roze Padhne Ki Dua";
			var Dua = "-  Aye allah hame huzur akdas sallallah-alaye-wa-sallam ke hathon se jaam e kausar peena nasib farma."
		}
		else if(today == "4/20/2022") {
			var Roze = "18 Roze Padhne Ki Dua";
			var Dua = "-  Aye allah hame huzur akdas sallallah-alaye-wa-sallam ki shafaat nasib farma."
		}
		else if(today == "4/21/2022") {
			var Roze = "19 Roze Padhne Ki Dua";
			var Dua = "-  Aye allah tu apni aur hamare aka sallallaho-alaye-wa-sallam ki mohabbat hamare dilo mai dalde."
		}

		else if(today == "4/22/2022") {
			var Roze = "20 Roze Padhne Ki Dua";
			var Dua = "- Aye allah hame maut ki sakhti aur kabar ke azab se bacha."
		}
		else if(today == "4/23/2022") {
			var Roze = "21 Roze Padhne Ki Dua";
			var Dua = "- Aye allah munkir nakir ke sawalat ham par asaan farma."
		}
		else if(today == "4/24/2022") {
			var Roze = "22 Roze Padhne Ki Dua";
			var Dua = "- Aye allah hame qayamat ke din aapna deedar nasib farma."
		}
		else if(today == "4/25/2022") {
			var Roze = "23 Roze Padhne Ki Dua";
			var Dua = "-  Aye allah hame jannatul firdous mai jagha ata farma."
		}
		else if(today == "4/26/2022") {
			var Roze = "24 Roze Padhne Ki Dua";
			var Dua = "-   Aye allah hame qayamat ke din Qayamat ki garmi aur jahannam ke aag se mahefuz rakh."
		}
		else if(today == "4/27/2022") {
			var Roze = "25 Roze Padhne Ki Dua";
			var Dua = "-  Aye allah hame aur tamaam momineen wa mominaat ko hashr ki rushwaiyo se bacha."
		}
		else if(today == "4/28/2022") {
			var Roze = "26 Roze Padhne Ki Dua";
			var Dua = "-  Aye allah naam-e-amal hamare dahene hath mai nasib farma."
		}
		else if(today == "4/29/2022") {
			var Roze = "27 Roze Padhne Ki Dua";
			var Dua = "-  Aye allah hame apne arsh ke saye mai jagha nasib farma."
		}
		else if(today == "4/30/2022") {
			var Roze = "28 Roze Padhne Ki Dua";
			var Dua = "-  Aye allah pul siraat par bijli ki tarah guzarne ki taufik ata farma."
		}
		else if(today == "5/1/2022") {
			var Roze = "29 Roze Padhne Ki Dua";
			var Dua = "-  Aye allah hame dono jahano mai rasul e pak sallallah-alaye-wa-sallam ka gulam banakar rakh. "
		}
		else if(today == "5/2/2022") {
			var Roze = "30 Roze Padhne Ki Dua";
			var Dua = "-  Aye allah hame dono jahano mai rasul e pak sallallah-alaye-wa-sallam ka gulam banakar rakh."
		}
		else {
			var Roze = "Dua";
			var Dua = "- Rabbana atina fid dunya hasanatan wa fil Aakhirati hasanatan waqina ‘adhaban-nar";
		}

		//							varable create for call text
	
		console.log(today)
/// alertbox
		swal({
			title: Roze,
			text: Dua,
			imageUrl: "img/Sheik.png",
			showCloseButton: true,
			showConfirmButton: false,
//			confirmButtonClass: confirmButtonClass
		});
		/// alertbox for automate close
		setTimeout(() => {
			window.swal({
				title: "Alhamdulillah",
				showConfirmButton: false,
				timer: 1000
			});
		}, 8000);
	}
}
