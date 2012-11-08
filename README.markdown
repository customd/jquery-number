jQuery Timepicker Plugin
===========================
### By Sam Sehnert, [Digital Fusion](http://teamdf.com/) 2012

This is a [jQuery](http://jquery.com/) plugin which allows developers to easily format numbers 
for display use. Allows users to replace numbers inline in a document, or return a formatted number
for other uses.

Documentation
-------------

See our [jQuery Number Format](http://www.teamdf.com/web/jquery-number-format-redux/196/) article for more information.

### Basic number formatting

The number method takes up to four parameters, but only the first one is required.

1. Number: The number you want to format.

		$.number( 5020.2364 ); // Outputs 5,020
	
2. Decimal Places: The number of decimal places you wish to see. Defaults to 0.
		
		$.number( 5020.2364, 2 ); // Outputs: 5,020.24
		
3. Decimal Separator: The character(s) to use as a decimal separator. Defaults to '.'.
		
		$.number( 135.8729, 3, ',' ); // Outputs: 135,873

4. Thousands Separtor: The character(s) to use as a thousands separator. Defaults to ','.

		$.number( 5020.2364, 1, ',', ' ' ); // Outputs: 5 020,2	



### Writing numbers into an element

	$('.selector').number( 1234, 2 ); // Changes the text value of the element matching selector to the formatted number.



### Formatting numbers within a collection of elements

Assuming we have the following structure:

	<p>
	  <span class="number">1025.8702</span>
	  <span class="number">18023</span>
	  <span class="number">982.3</span>
	  <span class="number">.346323</span>
	</p>
	
We can use this JavaScript:

	// the 'true' signals we should read and replace the text contents of the target element.
	$('span.number').number( true, 2 )

And come away with this result:

	<p>
	  <span class="number">1,025.87</span>
	  <span class="number">18,023.00</span>
	  <span class="number">982.30</span>
	  <span class="number">0.35</span>
	</p>