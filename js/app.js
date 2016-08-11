/**
 * Created by Administrator on 8/11/2016.
 */

$(document).ready(function() {


//************* Begin select2 data and initialize  *************

    var data = [
        {'id' : '', 'text' : 'Select a country'},
        {'id' : 'AF', 'text' : 'Afghanistan'},
        {'id' : 'AX', 'text' : 'Aland Islands'},
        {'id' : 'AL', 'text' : 'Albania'},
        {'id' : 'DZ', 'text' : 'Algeria'},
        {'id' : 'AS', 'text' : 'American Samoa'},
        {'id' : 'AD', 'text' : 'Andorra'},
        {'id' : 'AO', 'text' : 'Angola'},
        {'id' : 'AI', 'text' : 'Anguilla'},
        {'id' : 'AQ', 'text' : 'Antarctica'},
        {'id' : 'AG', 'text' : 'Antigua And Barbuda'},
        {'id' : 'AR', 'text' : 'Argentina'},
        {'id' : 'AM', 'text' : 'Armenia'},
        {'id' : 'AW', 'text' : 'Aruba'},
        {'id' : 'AU', 'text' : 'Australia'},
        {'id' : 'AT', 'text' : 'Austria'},
        {'id' : 'AZ', 'text' : 'Azerbaijan'},
        {'id' : 'BS', 'text' : 'Bahamas'},
        {'id' : 'BH', 'text' : 'Bahrain'},
        {'id' : 'BD', 'text' : 'Bangladesh'},
        {'id' : 'BB', 'text' : 'Barbados'},
        {'id' : 'BY', 'text' : 'Belarus'},
        {'id' : 'BE', 'text' : 'Belgium'},
        {'id' : 'BZ', 'text' : 'Belize'},
        {'id' : 'BJ', 'text' : 'Benin'},
        {'id' : 'BM', 'text' : 'Bermuda'},
        {'id' : 'BT', 'text' : 'Bhutan'},
        {'id' : 'BO', 'text' : 'Bolivia'},
        {'id' : 'BA', 'text' : 'Bosnia And Herzegovina'},
        {'id' : 'BW', 'text' : 'Botswana'},
        {'id' : 'BV', 'text' : 'Bouvet Island'},
        {'id' : 'BR', 'text' : 'Brazil'},
        {'id' : 'IO', 'text' : 'British Indian Ocean Territory'},
        {'id' : 'BN', 'text' : 'Brunei Darussalam'},
        {'id' : 'BG', 'text' : 'Bulgaria'},
        {'id' : 'BF', 'text' : 'Burkina Faso'},
        {'id' : 'BI', 'text' : 'Burundi'},
        {'id' : 'KH', 'text' : 'Cambodia'},
        {'id' : 'CM', 'text' : 'Cameroon'},
        {'id' : 'CA', 'text' : 'Canada'},
        {'id' : 'CV', 'text' : 'Cape Verde'},
        {'id' : 'KY', 'text' : 'Cayman Islands'},
        {'id' : 'CF', 'text' : 'Central African Republic'},
        {'id' : 'TD', 'text' : 'Chad'},
        {'id' : 'CL', 'text' : 'Chile'},
        {'id' : 'CN', 'text' : 'China'},
        {'id' : 'CX', 'text' : 'Christmas Island'},
        {'id' : 'CC', 'text' : 'Cocos (Keeling) Islands'},
        {'id' : 'CO', 'text' : 'Colombia'},
        {'id' : 'KM', 'text' : 'Comoros'},
        {'id' : 'CG', 'text' : 'Congo'},
        {'id' : 'CD', 'text' : 'Congo, Democratic Republic'},
        {'id' : 'CK', 'text' : 'Cook Islands'},
        {'id' : 'CR', 'text' : 'Costa Rica'},
        {'id' : 'CI', 'text' : 'Cote D\'Ivoire'},
        {'id' : 'HR', 'text' : 'Croatia'},
        {'id' : 'CU', 'text' : 'Cuba'},
        {'id' : 'CY', 'text' : 'Cyprus'},
        {'id' : 'CZ', 'text' : 'Czech Republic'},
        {'id' : 'DK', 'text' : 'Denmark'},
        {'id' : 'DJ', 'text' : 'Djibouti'},
        {'id' : 'DM', 'text' : 'Dominica'},
        {'id' : 'DO', 'text' : 'Dominican Republic'},
        {'id' : 'EC', 'text' : 'Ecuador'},
        {'id' : 'EG', 'text' : 'Egypt'},
        {'id' : 'SV', 'text' : 'El Salvador'},
        {'id' : 'GQ', 'text' : 'Equatorial Guinea'},
        {'id' : 'ER', 'text' : 'Eritrea'},
        {'id' : 'EE', 'text' : 'Estonia'},
        {'id' : 'ET', 'text' : 'Ethiopia'},
        {'id' : 'FK', 'text' : 'Falkland Islands (Malvinas)'},
        {'id' : 'FO', 'text' : 'Faroe Islands'},
        {'id' : 'FJ', 'text' : 'Fiji'},
        {'id' : 'FI', 'text' : 'Finland'},
        {'id' : 'FR', 'text' : 'France'},
        {'id' : 'GF', 'text' : 'French Guiana'},
        {'id' : 'PF', 'text' : 'French Polynesia'},
        {'id' : 'TF', 'text' : 'French Southern Territories'},
        {'id' : 'GA', 'text' : 'Gabon'},
        {'id' : 'GM', 'text' : 'Gambia'},
        {'id' : 'GE', 'text' : 'Georgia'},
        {'id' : 'DE', 'text' : 'Germany'},
        {'id' : 'GH', 'text' : 'Ghana'},
        {'id' : 'GI', 'text' : 'Gibraltar'},
        {'id' : 'GR', 'text' : 'Greece'},
        {'id' : 'GL', 'text' : 'Greenland'},
        {'id' : 'GD', 'text' : 'Grenada'},
        {'id' : 'GP', 'text' : 'Guadeloupe'},
        {'id' : 'GU', 'text' : 'Guam'},
        {'id' : 'GT', 'text' : 'Guatemala'},
        {'id' : 'GG', 'text' : 'Guernsey'},
        {'id' : 'GN', 'text' : 'Guinea'},
        {'id' : 'GW', 'text' : 'Guinea-Bissau'},
        {'id' : 'GY', 'text' : 'Guyana'},
        {'id' : 'HT', 'text' : 'Haiti'},
        {'id' : 'HM', 'text' : 'Heard Island & Mcdonald Islands'},
        {'id' : 'VA', 'text' : 'Holy See (Vatican City State)'},
        {'id' : 'HN', 'text' : 'Honduras'},
        {'id' : 'HK', 'text' : 'Hong Kong'},
        {'id' : 'HU', 'text' : 'Hungary'},
        {'id' : 'IS', 'text' : 'Iceland'},
        {'id' : 'IN', 'text' : 'India'},
        {'id' : 'ID', 'text' : 'Indonesia'},
        {'id' : 'IR', 'text' : 'Iran, Islamic Republic Of'},
        {'id' : 'IQ', 'text' : 'Iraq'},
        {'id' : 'IE', 'text' : 'Ireland'},
        {'id' : 'IM', 'text' : 'Isle Of Man'},
        {'id' : 'IL', 'text' : 'Israel'},
        {'id' : 'IT', 'text' : 'Italy'},
        {'id' : 'JM', 'text' : 'Jamaica'},
        {'id' : 'JP', 'text' : 'Japan'},
        {'id' : 'JE', 'text' : 'Jersey'},
        {'id' : 'JO', 'text' : 'Jordan'},
        {'id' : 'KZ', 'text' : 'Kazakhstan'},
        {'id' : 'KE', 'text' : 'Kenya'},
        {'id' : 'KI', 'text' : 'Kiribati'},
        {'id' : 'KR', 'text' : 'Korea'},
        {'id' : 'KW', 'text' : 'Kuwait'},
        {'id' : 'KG', 'text' : 'Kyrgyzstan'},
        {'id' : 'LA', 'text' : 'Lao People\'s Democratic Republic'},
        {'id' : 'LV', 'text' : 'Latvia'},
        {'id' : 'LB', 'text' : 'Lebanon'},
        {'id' : 'LS', 'text' : 'Lesotho'},
        {'id' : 'LR', 'text' : 'Liberia'},
        {'id' : 'LY', 'text' : 'Libyan Arab Jamahiriya'},
        {'id' : 'LI', 'text' : 'Liechtenstein'},
        {'id' : 'LT', 'text' : 'Lithuania'},
        {'id' : 'LU', 'text' : 'Luxembourg'},
        {'id' : 'MO', 'text' : 'Macao'},
        {'id' : 'MK', 'text' : 'Macedonia'},
        {'id' : 'MG', 'text' : 'Madagascar'},
        {'id' : 'MW', 'text' : 'Malawi'},
        {'id' : 'MY', 'text' : 'Malaysia'},
        {'id' : 'MV', 'text' : 'Maldives'},
        {'id' : 'ML', 'text' : 'Mali'},
        {'id' : 'MT', 'text' : 'Malta'},
        {'id' : 'MH', 'text' : 'Marshall Islands'},
        {'id' : 'MQ', 'text' : 'Martinique'},
        {'id' : 'MR', 'text' : 'Mauritania'},
        {'id' : 'MU', 'text' : 'Mauritius'},
        {'id' : 'YT', 'text' : 'Mayotte'},
        {'id' : 'MX', 'text' : 'Mexico'},
        {'id' : 'FM', 'text' : 'Micronesia, Federated States Of'},
        {'id' : 'MD', 'text' : 'Moldova'},
        {'id' : 'MC', 'text' : 'Monaco'},
        {'id' : 'MN', 'text' : 'Mongolia'},
        {'id' : 'ME', 'text' : 'Montenegro'},
        {'id' : 'MS', 'text' : 'Montserrat'},
        {'id' : 'MA', 'text' : 'Morocco'},
        {'id' : 'MZ', 'text' : 'Mozambique'},
        {'id' : 'MM', 'text' : 'Myanmar'},
        {'id' : 'NA', 'text' : 'Namibia'},
        {'id' : 'NR', 'text' : 'Nauru'},
        {'id' : 'NP', 'text' : 'Nepal'},
        {'id' : 'NL', 'text' : 'Netherlands'},
        {'id' : 'AN', 'text' : 'Netherlands Antilles'},
        {'id' : 'NC', 'text' : 'New Caledonia'},
        {'id' : 'NZ', 'text' : 'New Zealand'},
        {'id' : 'NI', 'text' : 'Nicaragua'},
        {'id' : 'NE', 'text' : 'Niger'},
        {'id' : 'NG', 'text' : 'Nigeria'},
        {'id' : 'NU', 'text' : 'Niue'},
        {'id' : 'NF', 'text' : 'Norfolk Island'},
        {'id' : 'MP', 'text' : 'Northern Mariana Islands'},
        {'id' : 'NO', 'text' : 'Norway'},
        {'id' : 'OM', 'text' : 'Oman'},
        {'id' : 'PK', 'text' : 'Pakistan'},
        {'id' : 'PW', 'text' : 'Palau'},
        {'id' : 'PS', 'text' : 'Palestinian Territory, Occupied'},
        {'id' : 'PA', 'text' : 'Panama'},
        {'id' : 'PG', 'text' : 'Papua New Guinea'},
        {'id' : 'PY', 'text' : 'Paraguay'},
        {'id' : 'PE', 'text' : 'Peru'},
        {'id' : 'PH', 'text' : 'Philippines'},
        {'id' : 'PN', 'text' : 'Pitcairn'},
        {'id' : 'PL', 'text' : 'Poland'},
        {'id' : 'PT', 'text' : 'Portugal'},
        {'id' : 'PR', 'text' : 'Puerto Rico'},
        {'id' : 'QA', 'text' : 'Qatar'},
        {'id' : 'RE', 'text' : 'Reunion'},
        {'id' : 'RO', 'text' : 'Romania'},
        {'id' : 'RU', 'text' : 'Russian Federation'},
        {'id' : 'RW', 'text' : 'Rwanda'},
        {'id' : 'BL', 'text' : 'Saint Barthelemy'},
        {'id' : 'SH', 'text' : 'Saint Helena'},
        {'id' : 'KN', 'text' : 'Saint Kitts And Nevis'},
        {'id' : 'LC', 'text' : 'Saint Lucia'},
        {'id' : 'MF', 'text' : 'Saint Martin'},
        {'id' : 'PM', 'text' : 'Saint Pierre And Miquelon'},
        {'id' : 'VC', 'text' : 'Saint Vincent And Grenadines'},
        {'id' : 'WS', 'text' : 'Samoa'},
        {'id' : 'SM', 'text' : 'San Marino'},
        {'id' : 'ST', 'text' : 'Sao Tome And Principe'},
        {'id' : 'SA', 'text' : 'Saudi Arabia'},
        {'id' : 'SN', 'text' : 'Senegal'},
        {'id' : 'RS', 'text' : 'Serbia'},
        {'id' : 'SC', 'text' : 'Seychelles'},
        {'id' : 'SL', 'text' : 'Sierra Leone'},
        {'id' : 'SG', 'text' : 'Singapore'},
        {'id' : 'SK', 'text' : 'Slovakia'},
        {'id' : 'SI', 'text' : 'Slovenia'},
        {'id' : 'SB', 'text' : 'Solomon Islands'},
        {'id' : 'SO', 'text' : 'Somalia'},
        {'id' : 'ZA', 'text' : 'South Africa'},
        {'id' : 'GS', 'text' : 'South Georgia And Sandwich Isl.'},
        {'id' : 'ES', 'text' : 'Spain'},
        {'id' : 'LK', 'text' : 'Sri Lanka'},
        {'id' : 'SD', 'text' : 'Sudan'},
        {'id' : 'SR', 'text' : 'Suriname'},
        {'id' : 'SJ', 'text' : 'Svalbard And Jan Mayen'},
        {'id' : 'SZ', 'text' : 'Swaziland'},
        {'id' : 'SE', 'text' : 'Sweden'},
        {'id' : 'CH', 'text' : 'Switzerland'},
        {'id' : 'SY', 'text' : 'Syrian Arab Republic'},
        {'id' : 'TW', 'text' : 'Taiwan'},
        {'id' : 'TJ', 'text' : 'Tajikistan'},
        {'id' : 'TZ', 'text' : 'Tanzania'},
        {'id' : 'TH', 'text' : 'Thailand'},
        {'id' : 'TL', 'text' : 'Timor-Leste'},
        {'id' : 'TG', 'text' : 'Togo'},
        {'id' : 'TK', 'text' : 'Tokelau'},
        {'id' : 'TO', 'text' : 'Tonga'},
        {'id' : 'TT', 'text' : 'Trinidad And Tobago'},
        {'id' : 'TN', 'text' : 'Tunisia'},
        {'id' : 'TR', 'text' : 'Turkey'},
        {'id' : 'TM', 'text' : 'Turkmenistan'},
        {'id' : 'TC', 'text' : 'Turks And Caicos Islands'},
        {'id' : 'TV', 'text' : 'Tuvalu'},
        {'id' : 'UG', 'text' : 'Uganda'},
        {'id' : 'UA', 'text' : 'Ukraine'},
        {'id' : 'AE', 'text' : 'United Arab Emirates'},
        {'id' : 'GB', 'text' : 'United Kingdom'},
        {'id' : 'US', 'text' : 'United States'},
        {'id' : 'UM', 'text' : 'United States Outlying Islands'},
        {'id' : 'UY', 'text' : 'Uruguay'},
        {'id' : 'UZ', 'text' : 'Uzbekistan'},
        {'id' : 'VU', 'text' : 'Vanuatu'},
        {'id' : 'VE', 'text' : 'Venezuela'},
        {'id' : 'VN', 'text' : 'Viet Nam'},
        {'id' : 'VG', 'text' : 'Virgin Islands, British'},
        {'id' : 'VI', 'text' : 'Virgin Islands, U.S.'},
        {'id' : 'WF', 'text' : 'Wallis And Futuna'},
        {'id' : 'EH', 'text' : 'Western Sahara'},
        {'id' : 'YE', 'text' : 'Yemen'},
        {'id' : 'ZM', 'text' : 'Zambia'},
        {'id' : 'ZW', 'text' : 'Zimbabwe'}
    ];

    $(".country").select2({
        placeholder: "Select a country",
        allowClear: true,
        data: data
    });
/*************** End select2... ****************/


//************* Begin slider  *************

    $( "#slider-range-min1" ).slider({
        range: "min",
        value: 100,
        min: 1,
        max: 100,
        slide: function( event, ui ) {
            $( "#epercentage1" ).val( "Ethnicity %: " + ui.value );
        }
    });

    $( "#epercentage1" ).val( "Ethnicity %:" + $( "#slider-range-min1" ).slider( "value" ) );

    $( "#slider-range-min1" ).on( "slidechange", function( event, ui ) {
        var rangeVal = ui.value;
        if(rangeVal == 100){
            $(".add-more").attr("disabled",true);
        }else{
            $(".add-more").attr("disabled",false);
        }
    });
/*************** End slider ****************/


//************** Begin add another country info **************

    var next = 1;
    var prev = next;
    var maxRange = 100;

    $(".add-more").click(function(e){

        e.preventDefault();
        var addto = "#ethnicity" + next;
        var addRemove = "#ethnicity" + (next);
        next = next + 1;
        var newIn = '<div id="ethnicity'+next+'"><div class="form-group col-sm-5"><select name="country[]" class="form-control country" id="country'+next+'" ></select></div><div class="form-group col-sm-3"><label class="sr-only" for="epercentage">Ethnicity %</label><input style="width:100%" type="text" class="form-control btn" id="epercentage'+next+'" readonly name="epercentage"></div><div class="form-group col-sm-3"><div id="slider-range-min'+next+'" style="height:10px; margin-top:12px;"></div></div><div class="form-group col-sm-1"><button type="button" id="b'+next+'" class="btn btn-primary btn-block-xs remove-me" aria-label="Add another ethnicity"><span class="visible-xs">Add another </span><span class="glyphicon glyphicon-minus" aria-hidden="true"></span></button></div></div>';
        var newInput = $(newIn);
        $(addto).after(newInput);

        $('.remove-me').click(function(e){
            e.preventDefault();
            var fieldNum = this.id.charAt(this.id.length-1);
            var thisRange = $( "#slider-range-min"+fieldNum).slider( "value" );
            var fieldID = "#ethnicity" + fieldNum;
            $(this).remove();
            $(fieldID).remove();
            next = next - 1;

            console.log('Need to add in the previous slider: ' + thisRange);
            maxRange = maxRange + rangeVal;
            console.log((fieldNum-1));
            $( "#slider-range-min"+(fieldNum-1) ).slider({
                range: "min",
                value: maxRange,
                min: 1,
                max: maxRange,
                slide: function( event, ui ) {
                    $( "#epercentage"+(fieldNum-1) ).val( "Ethnicity %: " + ui.value );
                }
            });
            $( "#epercentage"+(fieldNum-1) ).val( "Ethnicity %:" + $( "#slider-range-min"+(fieldNum-1) ).slider( "value" ) );
        });

        /* Remove the countries previously selected */
        $(".country").each(function(){
            var c = $(this).val();
            if(c){
                var index = data.map(function(d) { return d['id']; }).indexOf(c)
                data.splice(index, 1);
            }
        });

        /* Bind select to the newly created country selectbox */
        $("#country"+next).select2({
            placeholder: "Select a country",
            allowClear: true,
            data: data
        });

        //Slider
        var rangeVal = $( "#slider-range-min"+(next-1) ).slider( "value" )
        console.log(maxRange);
        maxRange = maxRange- rangeVal;
        console.log("After: " +maxRange);

        $( "#slider-range-min"+next ).slider({
            range: "min",
            value: maxRange,
            min: 1,
            max: maxRange,
            slide: function( event, ui ) {
                $( "#epercentage"+next ).val( "Ethnicity %: " + ui.value );
            }
        });
        $( "#epercentage"+next ).val( "Ethnicity %:" + $( "#slider-range-min"+next ).slider( "value" ) );

        $( "#slider-range-min"+next ).on( "slidechange", function( event, ui ) {
            var rangeVal = ui.value;
            if(rangeVal == maxRange){
                $(".add-more").attr("disabled",true);
            }else{
                $(".add-more").attr("disabled",false);
            }

        });


    });
/*************** End add another country info ****************/


//************** Begin canvas image load  ********************//

    var canvasW = 800;
    var canvasH = 600;

    $('.gotoStep2').on("click", function() {

        var canvas = document.getElementById('nationality');
        var context = canvas.getContext('2d');
        var packer = new EFUSIONSOFT.RectanglePacker( canvasW , canvasH );
        var img_tempArray = [];
        var img_ObjArray = [];
        var i, toRenderW, toRenderH, coords;

        $(".country").each(function(event, ui){
            var countryId = $(ui).attr("id");
            var cnt = countryId.slice(7);
            var ePercent =  $("#slider-range-min" + cnt).slider( "value" );
            var c = $(this).val().toLowerCase();
            var imgSrc = "images/" + c + ".png";
            img_tempArray.push([imgSrc, ePercent]);
        });

        for( i = 0 ; i < img_tempArray.length ; i ++ )
        {
            //msg(img_tempArray[i][0] + ' ' + img_tempArray[i][1]);
            var imageObj = new Image();
            imageObj.src = img_tempArray[i][0];
            img_ObjArray.push(imageObj);
            toRenderW = (img_tempArray[i][1]/100)*img_ObjArray[i].width;
            toRenderH = (img_ObjArray[i].height/img_ObjArray[i].width)*toRenderW;
            coords = packer.findCoords( toRenderW, toRenderH );
            context.drawImage(img_ObjArray[i], coords.x, coords.y, toRenderW, toRenderH);
        }
    });

/*************** End canvas image load  ****************/


//************** Begin canvas image download ************//
    $('.btnDownload').on("click", function() {
        var canvas = document.getElementById('nationality');
        var imgView = document.getElementById('imgView');
        imgView.src = canvas.toDataURL("image/png");//convert canvas to Base64 encoding string data: Please check with alert();
        location.href = imgView.src ;
    });
});
/**************  End canvas image download ************/