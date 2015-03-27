(function () {
	angular
		.module ("KittiesApp")
		.controller("KittiesController", KittiesController);


	function KittiesController() {
		this.setAdopted = setAdopted;

		var self = this;
		this.cats =
		[
			{
				catName: 'Karl',
				monthsOld: 5,
				gender: 'boy',
				image: "images/carl.png",
				adopted: true,
				status: "Adopted"
			},
			{
				catName: 'Jack',
				monthsOld: 4,
				gender: 'boy',
				image: "images/jack.png",
				adopted: false,
				status: "Ready for Adoption"
			},
			{
				catName: 'Oscar',
				monthsOld: 2,
				gender: 'boy',
				image: "images/oscar.png",
				adopted: false,
				status: "Ready for Adoption"
			},
			{
				catName: 'Princess Mew',
				monthsOld: 3,
				gender: 'girl',
				image: "images/princessmew.png",
				adopted: false,
				status: "Ready for Adoption"
			}

		];

		function setAdopted($index) {
		// if (self.cats[$index].adopted === false ) 
			self.cats[$index].adopted = true;
			self.cats[$index].status = "Adopted";
			location.reload();
		// else
			// self.cats[$index].adopted = false;
		}
	}
	
})();