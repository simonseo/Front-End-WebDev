(function(global, ng) {
	'use strict';
	//taking the $scope and putting in all the data in there. 
	//tableController is the controller
	function tableController ( $scope ) {
		//the data here is the model.
		//later, this will be saved on the server and requested by $http service.
		var people = [
		  {
		    'name'    : 'tomy',
		    'age'     : 23,
		    'mail'    : 'tomy@study.com',
		    'birthday': '2001-09-02',
		    'has-money': 5300,
		    'picture' : {
		      'width': 200,
		      'height': 200,
		      'src': 'http://placehold.it/220x220/34c0ff/fff/?text=tomy'
		    }
		  },
		  {
		    'name'    : 'sunny',
		    'age'     : 32,
		    'mail'    : 'SUNNY@STUDY.COM',
		    'birthday': '1982-02-17',
		    'has-money': 10200,
		    'picture' : {
		      'width': 200,
		      'height': 200,
		      'src': 'http://placehold.it/220x220/7045cf/fff/?text=sunny'
		    }
		  },
		  {
		    'name'    : 'zeus',
		    'age'     : 61,
		    'mail'    : 'zeus@study.com',
		    'birthday': '1109-01-01',
		    'has-money': 1000000,
		    'picture' : {
		      'width': 200,
		      'height': 200,
		      'src': 'http://placehold.it/220x220/3a0099/fff/?text=zeus'
		    }
		  },
		  {
		    'name'    : 'Aron',
		    'age'     : 18,
		    'mail'    : 'aron@study.com',
		    'birthday': '1998-11-21',
		    'has-money': 121900,
		    'picture' : {
		      'width': 200,
		      'height': 200,
		      'src': 'http://placehold.it/220x220/3a0099/fff/?text=aron'
		    }
		  }
		];
		var ordermap = {
		  'sort'     : null,
		  'name'     : true,
		  'age'      : true,
		  'mail'     : true,
		  'birthday' : true
		};

		function changeOrder(prop) {
			$scope.ordermap[prop] = !$scope.ordermap[prop];
			$scope.ordermap.sort = $scope.ordermap.sort === prop ? '-'+prop : prop;
		}


		//we save the data in the viewmodel?
		$scope.people = people;
		$scope.ordermap = ordermap;
		$scope.changeOrder = changeOrder;
	}
	global.tableController = tableController;
})(this, this.angular);