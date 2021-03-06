(function () {
	angular
		.module ("KittiesApp")
		.controller("KittiesController", KittiesController);


	function KittiesController() {
		
		this.deleteKittie = deleteKittie;
		var itemIndex;
		var self = this;

		this.cats =
		[
			{	catName: 'Karl',
				monthsOld: 5,
				gender: 'boy',
				image: "images/carl.png",
				adopted: true,
				status: "Adopted"
			},
			{	catName: 'Jack',
				monthsOld: 4,
				gender: 'boy',
				image: "images/jack.png",
				adopted: false,
				status: "Ready for Adoption"
			},
			{	catName: 'Oscar',
				monthsOld: 2,
				gender: 'boy',
				image: "images/oscar.png",
				adopted: false,
				status: "Ready for Adoption"
			},
			{	catName: 'Princess Mew',
				monthsOld: 3,
				gender: 'girl',
				image: "images/princessmew.png",
				adopted: false,
				status: "Ready for Adoption"
			}

		];

	
		function deleteKittie(cat) {
			console.log(self.cats.indexOf(cat));
			self.cats.splice(self.cats.indexOf(cat),1);
			// location.reload();
		}
	}
	
})();