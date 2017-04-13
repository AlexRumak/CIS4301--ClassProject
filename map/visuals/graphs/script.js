var bardata = [];
var namedata =[];

d3.csv('offender_county_count_theft.csv',function (data) {

    for (key in data)
        {
            
        data.forEach(function(d) {
            d.Number = +d.Number;
          }); 
            bardata.push(data[key].Number)
            namedata.push(data[key].OFFENSECOUNTY)   
        }     
    
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
				.style('stroke', "#000")
});


