
var app = angular.module('app', []);

app.controller("appController", function appController($scope, $timeout){
	
	$scope.progressCount = 1;
	$scope.values = [{
		text:'10%',
		stp:"stp1"
	},{
		text:'45%',
		stp:"stp2"
	},{
		text:'75%',
		stp:"stp3"
	},{
		text:'100%',
		stp:"stp4"
	}];

	$scope.progress= {
		stp1: 'col-xs-3 bs-wizard-step active',
		stp2: 'col-xs-3 bs-wizard-step disabled',
		stp3: 'col-xs-3 bs-wizard-step disabled',
		stp4: 'col-xs-3 bs-wizard-step disabled',
		stp1text: '0%',
		stp2text: '',
		stp3text: '',
		stp4text: '',
	};

	$scope.next = function(){
		$scope.progress['stp'+$scope.progressCount] = 'col-xs-3 bs-wizard-step complete';
		$timeout(function(){
			$scope.progress['stp'+($scope.progressCount + 1)] = 'col-xs-3 bs-wizard-step active';
			$scope.progressCount++;
			$scope.updateText();
		}, 470);
	};

	$scope.prev = function(){
		$scope.progress['stp'+$scope.progressCount] = 'col-xs-3 bs-wizard-step disabled';
		$timeout(function(){
			$scope.progress['stp'+($scope.progressCount-1)] = 'col-xs-3 bs-wizard-step active';
			$scope.progressCount--;
			$scope.updateText();
		}, 470);
	};

	$scope.updateText = function (){
		$scope.progress.stp1text= '';
		$scope.progress.stp2text= '';
		$scope.progress.stp3text= '';
		$scope.progress.stp4text= '';

		$scope.progress[$scope.values[$scope.progressCount-1].stp+"text"] = $scope.values[$scope.progressCount-1].text;
	}
});



