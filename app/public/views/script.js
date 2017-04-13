var bardata = [1654
,11182
,1223
,80
,40
,1267
,225
,2014
,65
,29
,4273
,979
,2309
,514
,357
,86
,127
,134
,306
,1119
,45
,132
,1398
,228
,31
,5
,884
,883
,2807
,847
,271
,158
,738
,985
,101
,21
,49
,118
,106
,1219
,187
,116
,381
,132
,738
,5
,197
,5453
,410
,285
,59
,171
,146
,601
,645
,31
,12
,1455
,74
,691
,98
,17
,4573
,91
,115
,329
,183
,41,
34];
var namedata =['DUVAL',
'BROWARD',
'ALACHUA',
'LAFAYETTE',
'GILCHRIST',
'ESCAMBIA',
'LAKE',
'SEMINOLE',
'WALTON',
'HENDRY',
'MIAMI-DADE',
'PALM BEACH',
'PINELLAS',
'VOLUSIA',
'SARASOTA',
'FLAGLER',
'SANTA ROSA',
'BAKER',
'TAYLOR',
'ORANGE',
'WASHINGTON',
'HERNANDO',
'ST. LUCIE',
'ST. JOHNS',
'WAKULLA',
'GULF',
'LEON',
'MARTIN',
'INTERSTATE',
'MARION',
'MANATEE',
'LEVY',
'COLUMBIA',
'PASCO',
'DESOTO',
'GLADES',
'HOLMES',
'CHARLOTTE',
'BRADFORD',
'MONROE',
'OKALOOSA',
'CITRUS',
'LEE',
'MADISON',
'HIGHLANDS',
'OUT OF STATE',
'DIXIE',
'BREVARD',
'BAY',
'OSCEOLA',
'JEFFERSON',
'NASSAU',
'HARDEE',
'CLAY',
'SUWANNEE',
'CALHOUN',
'FRANKLIN',
'HILLSBOROUGH',
'JACKSON',
'INDIAN RIVER',
'GADSDEN',
'LIBERTY',
'POLK',
'PUTNAM',
'COLLIER',
'OKEECHOBEE',
'HAMILTON',
'SUMTER',
'UNION'
];
       
    
var margin = {top:30,right:30,bottom:40,left:50}

/*bardata.sort(function compareNumbers(a,b)
            {
   return a-b; 
});*/

var height = 400 - margin.top - margin.bottom,
	width = 600,
	barWidth = 50,
	barOffset=5
    county = "";

var tempColor;
	   
var colors = d3.scaleLinear()	
		.domain([0,bardata.length])
		.range(['#FFB832','#C61C6F'])
	
var yScale = d3.scaleLinear()
		.domain([0,d3.max(bardata)])
		.range([0, height])
	
var xScale = d3.scaleBand()
		.domain(d3.range(0,bardata.length))
		.padding(0,.5)
		.range([0,width])

var tooltip = d3.select('body').append('div')
    .style('position','absolute')
    .style('padding','0 10px')
    .style('background','white')
    .style('opacity',0)
	

var myChart = d3.select('#chart').append('svg')	
	.attr('width',width + margin.left + margin.right)
	.attr('height', height + margin.top + margin.bottom)
	.append('g')
	.attr('transform','translate(' + margin.left+','+margin.top +')')
	.selectAll('rect').data(bardata)
	.enter()
        .append('rect')
		.style('fill',function(d,i){
			return colors(i);
		})
		.attr('width' , xScale.bandwidth())
		.attr('height',0)
		.attr('x',function(d,i){
			return xScale(i);
		})
		.attr('y',height)
        .attr("county",function(d,i){
            return namedata[i];
        })
       
	.on('mouseover', function(d) {

        tooltip.transition()
            .style('opacity', .9)

        tooltip.html(d)
            .style('left', (d3.event.pageX - 35) + 'px')
            .style('top',  (d3.event.pageY - 30) + 'px')
        
         mytext
            .style('opacity',.9)
            .text(d3.select(this).attr('county'))
        
        tempColor = this.style.fill;
        d3.select(this)
            .style('opacity', .5)
            .style('fill', 'yellow')
    })

    .on('mouseout', function(d) {
        d3.select(this)
            .style('opacity', 1)
            .style('fill', tempColor)
        
        mytext
        .style('opacity',0)
        
    })
	
var mytext = d3.select('body').append('div')
    .style('position','absolute')
    .style('padding','0 10px')
    .style('background','white')
    .style('opacity',0)
    
    

	myChart.transition()
		.attr('height',function(d){
			return yScale(d);
		})
		.attr('y',function(d){
			return height - yScale(d);
		})
		.delay(function(d,i){
			return i*4;
		})

    
	var vGuideScale = d3.scaleLinear()
		.domain([0,d3.max(bardata)])
		.range([height,0])
		
	var hGuideScale = d3.scaleLinear()
		.domain([0,bardata.length])
		.range([0,width])
		
	var vAxis = d3.axisLeft()	
		.scale(vGuideScale)
		.ticks(10)
		
	var vGuide = d3.select('svg').append('g')
			vAxis(vGuide)
			vGuide.attr('transform','translate(' + margin.left+','+margin.top +')')
			vGuide.selectAll('path')
				.style('fill','none')
				.style('stroke', '#000')
			vGuide.selectAll('line')
				.style('stroke', '#000')
				
	var hAxis = d3.axisBottom()
		.scale(hGuideScale)
		.ticks(20)

	var hGuide = d3.select('svg').append('g')
			hAxis(hGuide)
			hGuide.attr('transform','translate(' + margin.left+','+ (height + margin.top) +')')
			hGuide.selectAll('path')
				.style('fill','none')
				.style('stroke', '#000')
			hGuide.selectAll('line')
				.style('stroke', "#000");


