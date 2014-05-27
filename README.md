Hong Kong FIR (VHHK) FR24 Overlay
=================

This tool adds Hong Kong air traffic routes on top of FlightRadar24 map. Browser version only.

<span style="color: red">Note: Google Chrome users may encounter some rendering issues. Unfortunately we have cannot control this until they fix it.</a>

<span style="color: red">DO NOT USE FOR FLIGHT PLANNING OR NAVIGATION</a>
-----------------

Information may contain errors, and may not be updated. Routes have been simplified for easier reading.

Installation 使用方法
-----------------

http://bit.ly/1hRK7G0

Features
-----------------

1. Hong Kong SIDs, STARs and approach (07 / 07 Night / 25)
2. Hong Kong Terminal Transition Routes
3. Macau SIDs, STARs and approach
4. Macau / Shenzhen / Guangzhou TTRs (J101, J103, J104)
5. Holding Patterns
6. FIR boundary
7. Nearby routes
8. ATC radio

ATC FAQ
-----------------
1. Why is there no sound for some channels?

   Reception is poor or station is offline (closed during quiet hours).

2. The sound quality is not very good (for some channels).

   I am aware that there are some background clicking noise. This is due to the data drops from USB to my software and I am trying to fix it. The ATC occasionally rotates the transmitting stations. Therefore, I may get a strong signal for 127.05 but poor signal for 128.2, and on the other days just the opposite. 

3. Pilots' tx are missing.

   The distance to the aircrafts is much longer than the ground station(s).

4. Is there any delay?

   The delay is around 5-10 seconds, which is perfect for FR24 because the aircraft positions are delayed too!
   
5. Why isn't there tower/ground/delivery?

   From my location I cannot receive airfield communications. If you live in Tung Chung / Tuen Mun with clear view to the airport (through a window is OK) and can keep your computer on 24/7, contact me.
   
6. What hardware and sofware are you using?

   Currently 3 x RTL2832U USB dongles + custom dipole antennae + custom C++ based software on Windows. Streaming software is Icecast 2.
   
|          	| Center Frequency	| Frequencies (Capturing at 2.56Msamples/s)           	|
|----------	|------------------	|-----------------------------------------------------	|
| Dongle 1 	| 120.110 MHz      	| 118.925, 119.1, 119.5, 120.6, 121.0, 121.3          	|
| Dongle 2 	| 123.100 MHz      	| 122.0, 122.95, 123.8, 123.95                        	|
| Dongle 3 	| 127.650 MHz      	| 126.3, 126.5, 127.05, 127.1, 127.55, 128.2, 128.875 	|
