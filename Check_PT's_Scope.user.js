// ==UserScript==
// @name         RE PT's Scope Check
// @namespace    RE_PT's_Scope_Check
// @version      1
// @description  Check what process the PT is on AMS tool
// @author       vashnu@, ushentai@
// @match        https://enumeration-discovery*.amazon.com/*
// @include      https://enumeration-discovery*.amazon.com/*
// @require      https://code.jquery.com/jquery-3.6.0.min.js
// @require      https://gist.github.com/BrockA/2625891/raw/waitForKeyElements.js
// ==/UserScript==

const ptProcessMap = {
  "AROMA_DIFFUSER": "Process #2",
"LIP_COLOR": "Process #2",
"APPAREL_BELT": "Process #2",
"SKIN_TREATMENT_MASK": "Process #2",
"COFFEE": "Process #2",
"TOOTHBRUSH": "Process #2",
"HANGING_ORNAMENT": "Process #2",
"SOFA": "Process #2",
"ANTENNA": "Process #2",
"APPAREL_PIN": "Process #1",
"SUIT": "Process #1",
"COIN_PURSE_POUCH": "Process #1",
"DRESS": "Process #2",
"SHIRT": "Process #2",
"HAIR_CLIP": "Process #2",
"HERB": "Process #2",
"RING": "Process #1",
"TEA": "Process #2",
"LEHENGA_CHOLI_SET": "Process #1",
"SHAMPOO": "Process #2",
"AUDIO_CD_PLAYER": "Process #2",
"CHOCOLATE_CANDY": "Process #2",
"SANDAL": "Process #2",
"SLIPPER": "Process #2",
"CONDITIONER": "Process #2",
"BOOT": "Process #2",
"WATCH": "Process #2",
"COAT": "Process #2",
"UNDERPANTS": "Process #2",
"SWEATER": "Process #2",
"SAREE": "Process #2",
"BALLOON": "Process #2",
"BATTERY": "Process #1",
"BRA": "Process #2",
"BASKETBALL_HOOP": "Process #2",
"CABINET": "Process #2",
"BLAZER": "Process #2",
"BLADED_FOOD_PEELER": "Process #2",
"TIGHTS": "Process #2",
"CORSET": "Process #2",
"SHORTS": "Process #2",
"EARRING": "Process #2",
"SWIMWEAR": "Process #2",
"JEWELRY_SET": "Process #2",
"BLUE_LIGHT_BLOCKING_EYEGLASSES": "Process #2",
"SKIRT": "Process #2",
"NECKLACE": "Process #1",
"SUNGLASSES": "Process #2",
"BRACELET": "Process #1",
"LIGHT_BULB": "Process #2",
"GREETING_CARD": "Process #2",
"BLANK_BOOK": "Process #2",
"CARRIER_BAG_CASE": "Process #2",
"TENT": "Process #2",
"SPIRITS": "Process #2",
"BOARD_GAME": "Process #2",
"KURTA": "Process #2",
"SWEATSHIRT": "Process #2",
"CHARM": "Process #2",
"VIDEO_CARD": "Process #2",
"COOKIE": "Process #2",
"ADHESIVE_TAPES": "Process #2",
"BAKING_PAN": "Process #2",
"DRILL": "Process #2",
"DECORATIVE_SIGNAGE": "Process #2",
"CAMERA_FILM": "Process #2",
"BED_FRAME": "Process #2",
"VEST": "Process #1",
"DISHWARE_BOWL": "Process #2",
"SOLDERING_IRON": "Process #2",
"DRYING_RACK": "Process #2",
"FIGURINE": "Process #2",
"CANDLE": "Process #2",
"JERKY": "Process #2",
"FURNITURE": "Process #2",
"MICROWAVE_OVEN": "Process #2",
"KEYCHAIN": "Process #2",
"VASE": "Process #2",
"WIND_CHIME": "Process #2",
"HAIR_STYLING_AGENT": "Process #2",
"DRESSER": "Process #2",
"HUMIDIFIER": "Process #2",
"INCONTINENCE_PROTECTOR": "Process #2",
"DRINK_FLAVORED": "Process #2",
"COSTUME_MASK": "Process #1",
"BODY_STRAP": "Process #1",
"BANNER": "Process #2",
"CLOTHES_RACK": "Process #2",
"MILK_SUBSTITUTE": "Process #2",
"DECORATIVE_PILLOW_COVER": "Process #2",
"DISHWARE_PLATE": "Process #2",
"ELECTRONIC_ADAPTER": "Process #2",
"TRACK_SUIT": "Process #1",
"CALCULATOR": "Process #2",
"FLASHLIGHT": "Process #2",
"BREAKFAST_CEREAL": "Process #2",
"FOOD_STORAGE_CONTAINER": "Process #2",
"PIERCING_JEWELRY": "Process #1",
"TABLE": "Process #2",
"JEWELRY_STORAGE": "Process #2",
"MARKING_PEN": "Process #2",
"SALWAR_SUIT_SET": "Process #2",
"FABRIC_SOFTENER": "Process #2",
"APRON": "Process #1",
"SHOE_INSERT": "Process #2",
"TOTE_BAG": "Process #1",
"PICKLE": "Process #2",
"SCARF": "Process #1",
"PLANNER": "Process #2",
"CHOLI": "Process #2",
"REFRIGERATOR": "Process #2",
"LEG_SLEEVE": "Process #1",
"SAFETY_MASK": "Process #2",
"BRA_UNDERWEAR_SET": "Process #1",
"STORAGE_BOX": "Process #2",
"EYELID_COLOR": "Process #2",
"STORAGE_HOOK": "Process #2",
"SAW": "Process #2",
"CHEWING_GUM": "Process #2",
"LEAVENING_AGENT": "Process #2",
"PUFFED_SNACK": "Process #2",
"TUNIC": "Process #1",
"PAINT": "Process #2",
"HANGING_MOBILE": "Process #2",
"SCULPTURE": "Process #2",
"HAIR_TRIMMER": "Process #2",
"WAIST_PACK": "Process #1",
"SKIN_EXFOLIANT": "Process #2",
"WATER": "Process #2",
"DAIRY_BASED_CHEESE": "Process #2",
"BABY_JUMPER_WALKER": "Process #1",
"MATTRESS": "Process #2",
"APPAREL_HEAD_NECK_COVERING": "Process #1",
"WASHER": "Process #2",
"APPAREL_GLOVES": "Process #1",
"BLOOD_PRESSURE_MONITOR": "Process #2",
"KNEE_PAD": "Process #2",
"EARPLUG": "Process #2",
"JEWELRY": "Process #1",
"PROTEIN_DRINK": "Process #2",
"CEREAL": "Process #2",
"FLASH_DRIVE": "Process #2",
"NAIL_POLISH_REMOVER": "Process #2",
"DUFFEL_BAG": "Process #1",
"KEYBOARD_INSTRUMENTS": "Process #2",
"SNACK_MIX": "Process #2",
"ELECTRIC_SHAVER": "Process #2",
"PACKAGED_SOUP_AND_STEW": "Process #2",
"CORRECTIVE_EYEGLASSES": "Process #1",
"TOOTH_CLEANING_AGENT": "Process #2",
"CUTTING_BOARD": "Process #2",
"FOOD_GLITTER_SPRINKLE": "Process #2",
"ORAL_IRRIGATOR": "Process #2",
"ANIMAL_CAGE": "Process #2",
"PACIFIER": "Process #2",
"NOTEBOOK_COMPUTER": "Process #2",
"PERSONAL_PILL_DISPENSER": "Process #2",
"BABY_SEAT": "Process #1",
"TRASH_CAN": "Process #2",
"LIP_BALM": "Process #2",
"SEASONING": "Process #2",
"COSTUME_HEADWEAR": "Process #2",
"HAND_SANITIZER": "Process #2",
"PAJAMAS": "Process #2",
"TOOTH_WHITENER": "Process #2",
"EYEBROW_COLOR": "Process #2",
"INTERNAL_MEMORY": "Process #2",
"BAKING_CHOCOLATE": "Process #1",
"UNSTITCHED_GARMENT": "Process #1",
"DISHWASHER": "Process #2",
"AIR_CONDITIONER": "Process #2",
"NUT_BUTTER": "Process #2",
"JUICE_AND_JUICE_DRINK": "Process #2",
"LOCK": "Process #2",
"COSMETIC_SPONGE": "Process #1",
"BONDING_ADHESIVES": "Process #2",
"BEER": "Process #1",
"INSECT_REPELLENT": "Process #1",
"TRAY": "Process #2",
"HAIR_TIE": "Process #1",
"HARDWARE_HANDLE": "Process #2",
"ANIMAL_COLLAR": "Process #2",
"FLAVORED_DRINK_CONCENTRATE": "Process #1",
"TOOTHBRUSH_HEAD": "Process #1",
"PORTABLE_ELECTRONIC_DEVICE_ARMBAND": "Process #2",
"SAUCE": "Process #1",
"HAIR_BRUSH": "Process #2",
"AREA_DEODORIZER": "Process #1",
"DUST_REMOVAL_TOOL": "Process #2",
"MICROPHONE": "Process #2",
"MAKEUP_PRIMER": "Process #2",
"PRESSURE_COOKER": "Process #2",
"CULINARY_SALT": "Process #1",
"WOUND_DRESSING": "Process #1",
"FLOUR": "Process #1",
"FISH": "Process #1",
"MULTIPORT_HUB": "Process #2",
"POPCORN": "Process #1",
"ROTARY_TOOL": "Process #2",
"POWER_INVERTER": "Process #2",
"BABY_BOTTLE": "Process #1",
"DRINKING_STRAW": "Process #1",
"HAIRBAND": "Process #2",
"CANDY": "Process #1",
"CONDIMENT": "Process #1",
"BED": "Process #2",
"BABY_CARRIER": "Process #1",
"SAUTE_FRY_PAN": "Process #2",
"FALSE_NAIL": "Process #1",
"LAP_DESK": "Process #2",
"MEAL_REPLACEMENT_BEVERAGE": "Process #1",
"PET_TOY": "Process #1",
"STROLLER": "Process #1",
"FRUIT": "Process #1",
"CONDOM": "Process #2",
"BROOM": "Process #2",
"TEETHER": "Process #1",
"ESSENTIAL_OIL": "Process #2",
"INFANT_TODDLER_CAR_SEAT": "Process #1",
"FURNITURE_FLOOR_PROTECTOR": "Process #2",
"TEMPORARY_TATTOO": "Process #1",
"BODY_LUBRICANT": "Process #1",
"DUMBBELL": "Process #2",
"DAIRY_BASED_DRINK": "Process #2",
"COUNTERTOP_OVEN": "Process #2",
"LEGUME": "Process #1",
"ELECTRIC_WATER_BOILER": "Process #2",
"MASSAGE_STICK": "Process #1",
"MEAT": "Process #1",
"HVAC_CONTROL_THERMOSTAT": "Process #2",
"DISPLAY_ALBUM": "Process #2",
"FALSE_EYELASH": "Process #1",
"TOWEL": "Process #2",
"CADDY": "Process #1",
"SKIN_CARE_AGENT": "Process #1",
"KNIFE_BLOCK_SET": "Process #1",
"DEHUMIDIFIER": "Process #2",
"SAFETY_GLASSES": "Process #2",
"STATIONARY_BICYCLE": "Process #2",
"WRITING_BOARD": "Process #2",
"LEAF_BLOWER": "Process #2",
"UNMANNED_AERIAL_VEHICLE": "Process #2",
"NAIL_POLISH": "Process #2",
"ASTRINGENT_SUBSTANCE": "Process #2",
"PERSONAL_FLOTATION_DEVICE": "Process #2",
"TABLECLOTH": "Process #2",
"PET_ACTIVITY_STRUCTURE": "Process #2",
"ICE_CHEST": "Process #2",
"FILE_FOLDER": "Process #1",
"PET_APPAREL": "Process #2",
"CELL_PHONE_GRIP": "Process #2",
"ANIMAL_HARNESS": "Process #1",
"PET_FEEDER": "Process #2",
"JUMP_ROPE": "Process #2",
"WAIST_CINCHER": "Process #2",
"KARAOKE_MACHINE": "Process #2",
"ORTHOPEDIC_BRACE": "Process #2",
"SWIMMING_POOL": "Process #2",
"VEHICLE_ACCENT_LIGHT": "Process #2",
"ANIMAL_LITTER": "Process #1",
"UTILITY_CART_WAGON": "Process #2",
"ROWING_MACHINE": "Process #2",
"PUMP_SPRAYER": "Process #2",
"PENCIL_SHARPENER": "Process #2",
"PILLOWCASE": "Process #2",
"ELECTRONIC_SWITCH": "Process #1",
"ENVELOPE": "Process #2",
"JUICER": "Process #2",
"STORAGE_BAG": "Process #2",
"WILDLIFE_FEEDER": "Process #2",
"FRESH_CUT_FLOWERS_PLANTS": "Process #2",
"ROBOTIC_VACUUM_CLEANER": "Process #2",
"STEAM_CLEANER": "Process #2",
"PUZZLES": "Process #2",
"SAFE": "Process #2",
"SANITARY_NAPKIN": "Process #2",
"ELECTRICITY_GENERATOR": "Process #2",
"SCULPTING_MATERIAL": "Process #2",
"LADDER": "Process #2",
"ONBOARD_CAMERA": "Process #2",
"SKATEBOARD": "Process #2",
"VACUUM_CLEANER_BAG": "Process #2",
"PLANT_SEED": "Process #1",
"SEXUAL_STIMULATION_DEVICE": "Process #1",
"ROOM_DIVIDER": "Process #2",
"FISHING_REEL": "Process #2",
"COOKTOP": "Process #2",
"CLOTHES_HANGER": "Process #2",
"FISHING_ROD_REEL_COMBO": "Process #2",
"RADIO": "Process #2",
"RICE_COOKERS": "Process #2",
"AXE": "Process #2",
"THERAPEUTIC_THERMAL_COMPRESS": "Process #2",
"PITCHER": "Process #2",
"FISHING_ROD": "Process #2",
"TOOTHBRUSH_HOLDER": "Process #2",
"HAMMER_MALLET": "Process #2",
"BEAN_BAG_CHAIR": "Process #2",
"TOPICAL_HAIR_REGROWTH_TREATMENT": "Process #2",
"TOY_SLIME": "Process #2",
"SPRAY_BOTTLE": "Process #2",
"COOKIE_CUTTER": "Process #2",
"LOCATION_TRACKER": "Process #2",
"ANIMAL_CARRIER": "Process #2",
"FOOD_STORAGE_BAG": "Process #2",
"TREADMILL": "Process #2",
"POPCORN_POPPER": "Process #2",
"VEHICLE_MIRROR": "Process #2",
"SPLASH_POOL": "Process #2",
"HEADBOARD": "Process #2",
"BARBECUE_GRILL": "Process #2",
"VENT_HOOD": "Process #2",
"PAPER_SHREDDER": "Process #2",
"UTILITY_SPONGE": "Process #2",
"TOILET_PAPER_HOLDER": "Process #2",
"FURNITURE_LINER": "Process #2",
"SOAP_DISH": "Process #2",
"TARP": "Process #2",
"SQUEEGEE": "Process #1",
"SPORT_HELMET": "Process #2",
"UNINTERRUPTIBLE_POWER_SUPPLY": "Process #1",
"INPUT_PEN": "Process #1",
"AIR_PURIFIER": "Process #1",
"PLAY_WORKSTATION": "Process #1",
"FLAT_SCREEN_DISPLAY_MOUNT": "Process #1",
"SEALANT": "Process #1",
"STORAGE_BINDER": "Process #1",
"ELECTRONIC_BOOK_READER": "Process #2",
"MOTION_DETECTOR_DEVICE": "Process #1",
"FREESTANDING_SHELTER": "Process #1",
"BICYCLE_BELL": "Process #1",
"SHIPPING_BOX": "Process #2",
"ROLLING_PIN": "Process #1",
"NETWORK_INTERFACE_CONTROLLER_ADAPTER": "Process #1",
"CLOTHES_PIN": "Process #1",
"FIRE_PIT": "Process #1",
"PORTABLE_STOVE": "Process #1",
"ICE_MAKER": "Process #1",
"HANGING_ROD": "Process #1",
"CIGARETTE_CASE": "Process #1",
"FITNESS_BENCH": "Process #1",
"RIDE_ON_TOY": "Process #1",
"AIR_MATTRESS": "Process #2",
"GARMENT_STEAMER": "Process #1",
"KNIFE": "Process #2",
"MAGNIFIER": "Process #1",
"BOXING_GLOVE": "Process #1",
"TAMPON": "Process #2",
"TONNEAU_COVER": "Process #1",
"AIR_COOLER": "Process #2",
"VIDEO_PROJECTOR": "Process #2",
"VIDEO_DISC_PLAYER": "Process #2",
"POWER_CORD": "Process #1",
"WHEEL_CUTTER": "Process #1",
"MILK_FROTHER": "Process #2",
"FITTED_SHEET": "Process #1",
"PRINT_COPY_PAPER": "Process #1",
"PHOTOGRAPHIC_FILM": "Process #1",
"APPENDAGE_WARMER": "Process #1",
"SURVIVAL_KIT": "Process #1",
"GRAPHIC_TABLET": "Process #2",
"FIDGET_TOY_SPINNER": "Process #1",
"AV_SIGNAL_SWITCH": "Process #1",
"CRIB": "Process #2",
"DIGITAL_PICTURE_FRAME": "Process #1",
"ART_EASEL": "Process #1",
"SLOW_COOKER": "Process #1",
"TV_TUNER_CARD": "Process #2",
"ROLLER_SKATE": "Process #1",
"ERASER": "Process #2",
"FOUNTAIN": "Process #1",
"AUDIO_MIDI_CONTROLLER": "Process #2",
"BADGE_HOLDER": "Process #2",
"BLOWER_INFLATED_DECORATION": "Process #2",
"MUSICAL_INSTRUMENTS": "Process #1",
"MUSICAL_INSTRUMENT_STRING": "Process #2",
"FOOD_BIB": "Process #2",
"WINDOW_SHADE": "Process #2",
"LAWN_MOWER": "Process #1",
"KITCHEN_KNIFE": "Process #1",
"FREEZER": "Process #1",
"ELLIPTICAL_TRAINER": "Process #1",
"HOUSEHOLD_STAIN": "Process #1",
"SOLAR_PANEL": "Process #1",
"BINOCULAR": "Process #2",
"BRASS_AND_WOODWIND_INSTRUMENTS": "Process #1",
"MECHANICAL_LIGHTER": "Process #1",
"PRESSURE_WASHER": "Process #1",
"TWO_WAY_RADIO": "Process #2",
"BICYCLE_PEDAL": "Process #2",
"WEATHER_STATION": "Process #2",
"ICE_CREAM_MAKER": "Process #2",
"FACIAL_TISSUE_HOLDER": "Process #1",
"MEMORY_CARD_READER": "Process #2",
"LAMPSHADE": "Process #2",
"SHOWER_CAP": "Process #2",
"MICROPHONE_STAND": "Process #1",
"STOOL_SEATING": "Process #1",
"PET_PEST_CONTROL": "Process #1",
"SELF_BALANCING_ELECTRIC_VEHICLE": "Process #2",
"PIPING_TIP": "Process #1",
"CONTAINER_LID": "Process #1",
"PROJECTILE_BOW": "Process #1",
"CRAFT_MOLD": "Process #1",
"BLOWTORCH": "Process #1",
"WHISK_UTENSIL": "Process #1",
"PLAY_SLIDE": "Process #1",
"INTEGRATED_STEREO_SYSTEM": "Process #1",
"WEIGHT_PLATE": "Process #1",
"WATERING_CAN": "Process #1",
"HANDRAIL": "Process #1",
"SWORD": "Process #1",
"MOTHERBOARD": "Process #1",
"COMPUTER_PROCESSOR": "Process #1",
"WORKBENCH": "Process #1",
"MEASURING_CUP": "Process #1",
"FABRIC": "Process #1",
"AIR_PUMP": "Process #1",
"DRILL_BITS": "Process #1",
"DECORATIVE_CUTOUT": "Process #1",
"TOWEL_HOLDER": "Process #1",
"FISHING_HOOK": "Process #1",
"WATER_FLOTATION_DEVICE": "Process #1",
"GOLF_CLUB_BAG": "Process #1",
"GUITARS": "Process #1",
"MARBLE_TRACK": "Process #1",
"TAPE_MEASURE": "Process #2",
"CABLE_TIE": "Process #1",
"ANIMAL_SHELTER": "Process #1",
"OUTBUILDING": "Process #1",
"COOKING_POT": "Process #1",
"ABRASIVES": "Process #1",
"MACHINE_LUBRICANT": "Process #1",
"SAFETY_MASK_STRAP_EXTENDER": "Process #1",
"CAMERA_CONTINUOUS_LIGHT": "Process #1",
"DUTCH_OVENS": "Process #1",
"FORK": "Process #1",
"PROJECTION_SCREEN": "Process #1",
"BUBBLE_MAKER": "Process #1",
"AQUARIUM_POND_WATER_TREATMENT": "Process #1",
"POOL_COVER": "Process #1",
"HOLE_PUNCH": "Process #1",
"MANUAL_FOOD_MILL_GRINDER": "Process #1",
"ELECTRIC_FOOD_MILL_GRINDER": "Process #1",
"LICENSE_PLATE_ATTACHMENT": "Process #1",
"DECORATIVE_RIBBON_TRIM": "Process #1",
"DISHWARE_PLACE_SETTING": "Process #1",
"ABDOMINAL_EXERCISER": "Process #1",
"UTILITY_JACK": "Process #1",
"EXERCISE_BAND": "Process #1",
"YARN": "Process #1",
"GAS_SMOKE_FIRE_ALARM": "Process #1",
"FOOD_SPATULA": "Process #1",
"RUBBER_STAMP": "Process #1",
"CROCHET_HOOK": "Process #1",
"LANDLINE_PHONE": "Process #1",
"CAKE_TOPPER": "Process #1",
"WIRELESS_AUDIO_ADAPTER": "Process #1",
"ELECTRONIC_DEVICE_DOCKING_STATION": "Process #1",
"HARDWARE_TUBING": "Process #1",
"WALKING_STICK": "Process #1",
"ZIPPER_FASTENER": "Process #1",
"FOOD_GRATER": "Process #1",
"KAYAK": "Process #1",
"SANDER": "Process #1",
"BOOKEND": "Process #1",
"COUNTERTOP_FOOD_STEAMER": "Process #1",
"POT_HOLDER": "Process #1",
"WALLPAPER": "Process #1",
"MORTAR_AND_PESTLE_SET": "Process #1",
"BENCH": "Process #1",
"WEED_MOSS_CONTROL_AGENT": "Process #1",
"ELECTRIC_LIGHT": "Process #1",
"CAMERA_LENSES": "Process #1",
"BASSINET": "Process #1",
"TEAPOT": "Process #1",
"BOOKMARK": "Process #1",
"FOOD_PREPARATION_MOLD": "Process #1",
"CANDLE_HOLDER": "Process #1",
"VEHICLE_SEAT_COVER": "Process #1",
"BEDDING_SET": "Process #1",
"COOKWARE_SET": "Process #1",
"LABEL": "Process #1",
"SCIENCE_FUNDAMENTALS_KIT": "Process #1",
"GIFT_CARD": "Process #1",
"VEHICLE_MAT": "Process #1",
"RAW_MATERIALS": "Process #1",
"FACIAL_STEAMER": "Process #1",
"ITEM_STAND": "Process #1",
"PARTY_FAVOR": "Process #1",
"TOY_FIGURE_PLAYSET": "Process #1",
"PEST_CONTROL_DEVICE": "Process #1",
"FIDGET_TOY": "Process #1",
"ITEM_CONTAINER": "Process #1",
"PRETEND_PLAY_TOY": "Process #1",
"STEP_STOOL": "Process #2",
"COSMETIC_CASE": "Process #1",
"COMPUTER_CHASSIS": "Process #2",
"TOASTER": "Process #2",
"SUNSCREEN": "Process #2",
"SKIN_BLEMISH_REMOVAL_TOOL": "Process #1",
"SPORT_ACTIVITY_GLOVE": "Process #2",
"ADVENT_CALENDAR": "Process #2",
"ARTIFICIAL_PLANT": "Process #2",
"BACKPACK": "Process #2",
"PET_BED_MAT": "Process #2",
"SURFACE_PROTECTION_WAX": "Process #1",
"ARTIFICIAL_TREE": "Process #2",
"ROBE": "Process #2",
"PRINTER": "Process #2",
"WRENCH": "Process #2",
"ONE_PIECE_OUTFIT": "Process #2",
"MINERAL_SUPPLEMENT": "Process #2",
"CLEANING_BRUSH": "Process #2",
"LAUNDRY_HAMPER": "Process #2",
"MATTRESS_COVER": "Process #2",
"BODY_DEODORANT": "Process #2",
"DAIRY_BASED_BUTTER": "Process #2",
"DRY_SHAMPOO": "Process #2",
"FRUIT_SNACK": "Process #2",
"HAIR_CLEANER_CONDITIONER": "Process #2",
"HAIR_IRON": "Process #2",
"LAUNDRY_DETERGENT": "Process #2",
"MASCARA": "Process #2",
"SHAVING_AGENT": "Process #2",
"SKIN_CLEANING_AGENT": "Process #2",
"SKIN_SERUM": "Process #2",
"FLASH_MEMORY": "Process #2",
"MEAL_HOLDER": "Process #2",
"SPEAKERS": "Process #2",
"TELEVISION": "Process #2",
"VEHICLE_LIGHT_BULB": "Process #2",
"COORDINATED_OUTFIT": "Process #2",
"NIGHTGOWN_NIGHTSHIRT": "Process #2",
"FAUCET": "Process #2",
"WASHER_DRYER_COMBINATION": "Process #2",
"TOY_BUILDING_BLOCK": "Process #2",
"WEARABLE_COMPUTER": "Process #2",
"STRING_LIGHT": "Process #2",
"LAMP": "Process #2",
"CELLULAR_PHONE": "Process #2",
"TOY_FIGURE": "Process #2",
"BICYCLE": "Process #2",
"HAIR_ROLLER": "Process #2",
"VEHICLE_LIGHT_ASSEMBLY": "Process #2",
"NAIL_CLIPPER": "Process #2",
"COUNTERTOP_GRIDDLE_APPLIANCE": "Process #2",
"INKJET_PRINTER_INK": "Process #2",
"RECREATION_BALL": "Process #2",
"SNACK_CHIP_AND_CRISP": "Process #2",
"WALKER": "Process #2",
"LIGHT_FIXTURE": "Process #2",
"TABLET_COMPUTER": "Process #2",
"PORTABLE_ELECTRONIC_DEVICE_COVER": "Process #2",
"CHARGING_ADAPTER": "Process #2",
"BOTTLE": "Process #2",
"WRITING_INSTRUMENT": "Process #2",
"STICKER_DECAL": "Process #2",
"CLOCK": "Process #2",
"COSTUME_OUTFIT": "Process #2",
"WALLET": "Process #2",
"PULL_UP_BAR": "Process #2",
"BAKING_MIX": "Process #2",
"BATHWATER_ADDITIVE": "Process #2",
"HAIR_DRYER": "Process #2",
"GIFT_WRAP": "Process #2",
"HAIR_REMOVAL_AGENT": "Process #2",
"NOODLE": "Process #2",
"WINE": "Process #2",
"SNACK_FOOD_BAR": "Process #2",
"HAIR_COLORING_AGENT": "Process #2",
"SKIN_MOISTURIZER": "Process #2",
"NUTRITIONAL_SUPPLEMENT": "Process #2",
"VITAMIN": "Process #2",
"VINEGAR": "Process #2",
"HERBAL_SUPPLEMENT": "Process #2",
"TOILET_PAPER": "Process #2",
"MAKE_UP": "Process #2",
"RESPIRATOR": "Process #2",
"UMBRELLA": "Process #2",
"TABLETOP_GAME": "Process #2",
"ELECTRONIC_CABLE": "Process #2",
"MONITOR": "Process #2",
"DRINKING_CUP": "Process #2",
"LEOTARD": "Process #2",
"PANTS": "Process #2",
"SUITCASE": "Process #2",
"WIG": "Process #2",
"CELLULAR_PHONE_CASE": "Process #2",
"VACUUM_CLEANER": "Process #2",
"WALL_ART": "Process #2",
"POWER_BANK": "Process #2",
"BLANKET": "Process #2",
"SHELF": "Process #2",
"DISHWASHER_DETERGENT": "Process #2",
"COFFEE_MAKER": "Process #2",
"HOME_MIRROR": "Process #2",
"THERMOMETER": "Process #2",
"PLANTER": "Process #2",
"STANDALONE_STREAMING_MEDIA_PLAYER": "Process #2",
"INPUT_MOUSE": "Process #2",
"SPACE_HEATER": "Process #2",
"PILLOW": "Process #2",
"COMPUTER_DRIVE_OR_STORAGE": "Process #2",
"ELECTRIC_FAN": "Process #2",
"FACIAL_TISSUE": "Process #2",
"WASTE_BAG": "Process #2",
"HEADPHONES": "Process #2",
"SECURITY_CAMERA": "Process #2",
"ELECTRONIC_DEVICE_SKIN": "Process #2",
"RUG": "Process #2",
"CAMERA_TRIPOD": "Process #2",
"CAMCORDER": "Process #2",
"CHAIR": "Process #2",
"NON_RIDING_TOY_VEHICLE": "Process #2",
"BED_LINEN_SET": "Process #2",
"BASKET": "Process #2",
"FOOD_BLENDER": "Process #2",
"VIVARIUM": "Process #2",
"SKIN_CLEANING_WIPE": "Process #2",
"MANUAL_SHAVING_RAZOR": "Process #2",
"ELECTRIC_HEATING_PAD": "Process #2",
"MOUSE_PAD": "Process #2",
"SOCKS": "Process #2",
"HAT": "Process #2",
"COUNTERTOP_BURNER": "Process #2",
"TOYS_AND_GAMES": "Process #2",
"MASSAGER": "Process #2",
"MEDICATION": "Process #2",
"PICTURE_FRAME": "Process #2",
"SCREEN_PROTECTOR": "Process #2",
"PORTABLE_ELECTRONIC_DEVICE_STAND": "Process #2",
"PERSONAL_COMPUTER": "Process #2",
"TEXTILE_IRON": "Process #2",
"STORAGE_RACK": "Process #2",
"FOOD_PROCESSOR": "Process #2",
"TOY_VEHICLE_SET": "Process #2",
"GPS_OR_NAVIGATION_SYSTEM": "Process #2",
"MOUTHWASH": "Process #2",
"TOY_GUN": "Process #2",
"REMOTE_CONTROL": "Process #2",
"MP3_PLAYER": "Process #2",
"PAPER_TOWEL": "Process #2",
"VEGETABLE": "Process #2",
"SKIN_FOUNDATION_CONCEALER": "Process #2",
"COSMETIC_POWDER": "Process #2",
"EDIBLE_OIL_VEGETABLE": "Process #2",
"COSMETIC_BRUSH": "Process #2",
"CLEANING_AGENT": "Process #2",
"SLEEP_MASK": "Process #2",
"NETWORKING_ROUTER": "Process #2",
"AIR_FRYER": "Process #2",
"WATER_PURIFICATION_UNIT": "Process #2",
"TURNTABLE": "Process #2",
"KEYBOARD_MOUSE_SET": "Process #2",
"HAIR_COMB": "Process #2",
"SELF_TANNER": "Process #2",
"DENTAL_FLOSS": "Process #2",
"AIR_COMPRESSOR": "Process #2",
"RAZOR_BLADE_CARTRIDGE": "Process #2",
"FURNITURE_COVER": "Process #2",
"FIREPLACE": "Process #2",
"THERMOS": "Process #2",
"SCREWDRIVER": "Process #2",
"FOOD_SLICER": "Process #2",
"BREAST_PUMP": "Process #2",
"HAIR_EXTENSION": "Process #2",
"SINGLE_BOARD_COMPUTER": "Process #2",
"WIRELESS_SIGNAL_REPEATER": "Process #2",
"HANDBAG": "Process #2",
"CAMERA_DIGITAL": "Process #2",
"FIRST_AID_KIT": "Process #2",
"SHOWERHEAD": "Process #2",
"KETTLEBELL": "Process #2",
"PET_FOOD": "Process #2",
"VIRTUAL_REALITY_HEADSET": "Process #2",
"SLEEPING_BAG": "Process #2",
"NUT_AND_SEED": "Process #2",
"BODY_POSITIONER": "Process #2",
"KEYBOARDS": "Process #2",
"AV_RECEIVER": "Process #2",
"SURVEILLANCE_RECORDER_SYSTEM": "Process #2",
"PROTECTIVE_GLOVE": "Process #2",
"FLATWARE": "Process #2",
"POWER_STRIP": "Process #2",
"CURTAIN": "Process #2",
"SUGAR_CANDY": "Process #2",
"FOOD": "Process #2",
"PROTEIN_SUPPLEMENT_POWDER": "Process #2",
"MEDICAL_TEST_STRIP": "Process #2",
"PERSONAL_FRAGRANCE": "Process #2",
"SHOES": "Process #2",
"KICK_SCOOTER": "Process #2",
"FOOD_MIXER": "Process #2",
"PORTABLE_ELECTRONIC_DEVICE_MOUNT": "Process #2",
"WEIGH_SCALE": "Process #2",
"DESK": "Process #2",
"WATER_HEATER": "Process #2",
"SYRUP": "Process #2",
"FACE_SHAPING_MAKEUP": "Process #2",
"SUGAR": "Process #2",
"MOUTH_GUARD": "Process #1",
"CRACKER": "Process #1",
"BATHING_SPONGE": "Process #1",
"SALAD_DRESSING": "Process #1",
"PLAYARD": "Process #1",
"HONEY": "Process #1",
"SKIN_CLEANING_BRUSH": "Process #1",
"WHEELCHAIR": "Process #1",
"HOOKAH": "Process #1",
"TOILET_SEAT": "Process #1",
"BREAD": "Process #1",
"NAIL_DRYER": "Process #1",
"PRETZEL": "Process #1",
"CHANGING_PAD": "Process #1",
"FOOD_COLORING": "Process #1",
"SURFACE_CLEANING_WIPE": "Process #1",
"RICE_MIX": "Process #1",
"BAKING_CUP": "Process #1",
"POULTRY": "Process #1",
"NAIL_TREATMENT": "Process #1",
"MUSCLE_ROLLER": "Process #1",
"BAKING_PAPER": "Process #1",
"FITNESS_STEPPER": "Process #1",
"TEXTILE_DEODORIZER": "Process #1",
"CAKE": "Process #1",
"THICKENING_AGENT": "Process #1",
"BABY_FORMULA": "Process #1",
"COCKTAIL_SHAKER": "Process #1",
"HEATING_STOVE": "Process #1",
"DRAIN_OPENER_SUBSTANCE": "Process #1",
"STORAGE_DRAWER": "Process #1",
"SINK": "Process #1",
"SPORT_EQUIPMENT_BAG_CASE": "Process #1",
"TIMER": "Process #1",
"SYSTEM_POWER_DEVICE": "Process #1",
"SELF_STICK_NOTE": "Process #1",
"ANIMAL_NUTRITIONAL_SUPPLEMENT": "Process #1",
"CORD_ROPE": "Process #1",
"OTTOMAN": "Process #1",
"SPOON": "Process #1",
"CRIMPING_PLIERS": "Process #1",
"DISPOSABLE_NAPKIN": "Process #1",
"LINT_REMOVER": "Process #1",
"TAPE_LABEL_DISPENSER": "Process #1",
"FURNITURE_LEG": "Process #1",
"FOOD_SHAKER": "Process #1",
"SWING": "Process #1",
"STOVETOP_KETTLE": "Process #1",
"FASTENER_DRIVE_BIT": "Process #1",
"MONEY_BANK": "Process #1",
"BINDER_DIVIDER": "Process #1",
"DEEP_FRYER": "Process #1",
"FERTILIZER": "Process #1",
"CUP_HOLDER": "Process #1",
"JEWELRY_FINDING": "Process #1",
"FOOD_WRAP": "Process #1",
"RUG_PAD": "Process #1",
"PLACEMAT": "Process #1",
"3D_PRINTER": "Process #1",
"DIE_CUT_MACHINE": "Process #1",
"CHAINSAW": "Process #2",
"BALANCE_BOARD": "Process #1",
"RAMP": "Process #1",
"IRONING_BOARD": "Process #1",
"LEASH": "Process #1",
"CONFETTI": "Process #1",
"ICE_CUBE_TRAY": "Process #1",
"BATHTUB_SHOWER_TRIM_KIT": "Process #2",
"HAND_STRENGTHENER": "Process #1",
"GOLF_CLUB": "Process #1",
"CALENDAR": "Process #1",
"AIR_GUN": "Process #1",
"GARDEN_SHEAR_SCISSORS": "Process #1",
"AUTO_OIL": "Process #2",
"COFFEE_FILTER": "Process #1",
"CRAFT_WRAPPING_TISSUE_PAPER": "Process #1",
"SAW_BLADE": "Process #1",
"CRAFT_WOOD": "Process #1",
"GARDEN_EDGING": "Process #1",
"MATERIAL_HANDLING_TRUCK": "Process #1",
"CELL_PHONE_HOLSTER": "Process #1",
"CHEMICAL_TEST_STRIP": "Process #1",
"HVAC_AIR_FILTER": "Process #1",
"BATTERY_CHARGER": "Process #1",
"CHISEL": "Process #1",
"AIR_GUN_PROJECTILE": "Process #1",
"MUSICAL_INSTRUMENT_AMPLIFIER": "Process #1",
"LIQUID_INK": "Process #1",
"CAN_OPENER": "Process #1",
"EXERCISE_MAT": "Process #1",
"ELECTRONIC_COMPONENT_FAN": "Process #1",
"MULTITOOL": "Process #1",
"CARABINER": "Process #1",
"PUMP_DISPENSER": "Process #1",
"LITTER_BOX": "Process #1",
"BACKDROP": "Process #1",
"CRAFT_BEAD": "Process #1",
"MINIATURE_TOY_BUILDING": "Process #1",
"CAMERA_LENS_FILTERS": "Process #1",
"BED_SKIRT": "Process #1",
"FABRIC_APPLIQUE_PATCH": "Process #1",
"FURNITURE_EDGE_BUMPER": "Process #1",
"GUITAR_EFFECT_DEVICE": "Process #1",
"BICYCLE_BASKET": "Process #1",
"MECHANICAL_BELT": "Process #1",
"RECIPROCATING_HEDGE_TRIMMER": "Process #1",
"EXERCISE_BLOCK": "Process #1",
"ART_MEDIA_PAPER": "Process #1",
"DRINK_COASTER": "Process #1",
"HARDWARE_STAPLE": "Process #1",
"ELECTRONIC_DEVICE_COOLING_PAD": "Process #1",
"ANIMAL_FUR_CLEANER_CONDITIONER": "Process #1",
"COLLAPSIBLE_PLAY_STRUCTURE": "Process #1",
"ART_CRAFT_KIT": "Process #1",
"VIDEO_GAME_CONTROLLER": "Process #1",
"TWEEZER": "Process #1",
"WEIGHTLIFTING_BELT": "Process #1",
"HANDLEBAR": "Process #1",
"WATCH_BAND": "Process #2",
"SNOW_GLOBE": "Process #1",
"SPORT_TABLE_GAME": "Process #1",
"SHOVEL_SPADE": "Process #1",
"VEHICLE_HORN": "Process #1",
"SCREWS": "Process #1",
"CARD_DOCUMENT_SLEEVE": "Process #1",
"TEMPLATE_STENCIL": "Process #1",
"SWEATBAND": "Process #1",
"PORTABLE_TOOL_BOX": "Process #1",
"SEASONING_MILL": "Process #1",
"OPTICAL_DISC_DRIVE": "Process #1",
"TREE_SKIRT": "Process #1",
"AIMING_SCOPE_SIGHT": "Process #1",
"RANGEFINDER": "Process #1",
"PET_PLAYPEN": "Process #1",
"WEIGHT_RACK": "Process #1",
"WEARABLE_WEIGHT": "Process #1",
"ANIMAL_WATER_DISPENSER": "Process #1",
"UTILITY_KNIFE": "Process #1",
"PLECTRUM": "Process #1",
"PINBOARD": "Process #1",
"PORTABLE_VIDEO_DISC_PLAYER": "Process #1",
"SHADE_SAIL": "Process #1",
"SCANNER": "Process #1",
"SPORT_RACKET": "Process #1",
"FISHING_LINE": "Process #1",
"PAPER_TOWEL_HOLDER": "Process #1",
"VEHICLE_MOLDING": "Process #1",
"HELMET": "Process #2",
"METAL_DETECTOR": "Process #1",
"HARDWARE_HINGE": "Process #1",
"CAMERA_SUPPORT": "Process #1",
"WREATH": "Process #1",
"SOUND_CARD": "Process #1",
"PAINT_BRUSH": "Process #1",
"SEWING_MACHINE": "Process #1",
"CURTAIN_FASTENER": "Process #1",
"BUCKET": "Process #1",
"AUDIO_MIDI_INTERFACE": "Process #1",
"PUPPET": "Process #1",
"SIGNAGE": "Process #1",
"VEHICLE_BAG": "Process #1",
"TIRE_VALVE_STEM_CAP": "Process #1",
"JAR": "Process #1",
"SEWING_BUTTON": "Process #1",
"TREE_TOPPER": "Process #1",
"TELESCOPE": "Process #1",
"STAPLER": "Process #1",
"SECURITY_SYSTEM": "Process #1",
"DOOR": "Process #1",
"TRAMPOLINE": "Process #1",
"CARD_STOCK": "Process #1",
"FOOD_SMOKER": "Process #1",
"SCISSORS": "Process #1",
"SPORT_MITT": "Process #1",
"WINDING_REEL": "Process #1",
"FACE_SHIELD": "Process #1",
"VEHICLE_TIRE": "Process #2",
"VEHICLE_SCAN_TOOL": "Process #1",
"SELF_DEFENSE_SPRAY": "Process #1",
"CAMERA_FLASH": "Process #1",
"WRITING_PAPER": "Process #1",
"VEHICLE_COVER": "Process #2",
"CYCLING_COMPUTER": "Process #1",
"AUTO_BATTERY": "Process #1",
"BAR_TOOL_SET": "Process #1",
"DOORSTOP": "Process #1",
"FOOD_STRAINER": "Process #1",
"BREAD_MAKING_MACHINE": "Process #1",
"ELECTRONIC_SENSOR": "Process #1",
"GUN_HOLSTER": "Process #1",
"CIRCUIT_BREAKER": "Process #1",
"CLOTH_NAPKIN": "Process #1",
"AWNING": "Process #1",
"KNIFE_SHARPENER": "Process #1",
"ANCHOR_STAKE": "Process #1",
"CALISTHENICS_STAND": "Process #1",
"MAILBOX": "Process #1",
"PLAYHOUSE": "Process #1",
"CARGO_STRAP": "Process #1",
"TONG_UTENSIL": "Process #1",
"URN": "Process #1",
"JUMP_STARTER": "Process #1",
"PLIERS": "Process #1",
"DUVET_COVER": "Process #1",
"PEN_MARKER_INK_CARTRIDGE_REFILL": "Process #1",
"BAKING_MAT": "Process #1",
"SIM_CARD": "Process #1",
"CASSEROLES": "Process #1",
"VOICE_RECORDER": "Process #1",
"WINDOW_FILM": "Process #1",
"WEATHER_STRIPPING": "Process #1",
"SHOELACE": "Process #1",
"ELECTRICAL_OUTLET": "Process #1",
"ELECTRIC_MOTOR": "Process #1",
"DYE": "Process #1",
"BLOOD_OXYGEN_MONITOR": "Process #1",
"IRRIGATION_SPRINKLER": "Process #1",
"VALVE": "Process #1",
"EARMUFF": "Process #1",
"HIP_FLASK": "Process #1",
"TOGGLE_SWITCH": "Process #1",
"MUFFLER": "Process #1",
"SHOCK_ABSORBER": "Process #1",
"WATER_DISPENSER": "Process #1",
"UTILITY_HOLSTER_POUCH": "Process #1",
"PASTA_MAKER": "Process #1",
"SONAR_FATHOMETER": "Process #1",
"NETTING_COVER": "Process #1",
"TRANSPORT_RACK": "Process #1",
"TASK_TRAY": "Process #1",
"TILE": "Process #1",
"TOOL_BELT": "Process #1",
"MICROSCOPES": "Process #1",
"VEHICLE_BRAKE_PAD": "Process #1",
"FLAT_SHEET": "Process #1",
"ABRASIVE_WHEELS": "Process #1",
"TRIVET": "Process #1",
"PESTICIDE": "Process #1",
"CAULKS": "Process #1",
"WIRE": "Process #1",
"HARDWARE_BEARING": "Process #1",
"POOL_SPA_WATER_TREATMENT": "Process #1",
"SPORT_BAT": "Process #1",
"SPORT_WETSUIT": "Process #1",
"CYCLING_TIRE": "Process #1",
"GOLF_CLUB_COVER": "Process #1",
"VEHICLE_EMBLEM": "Process #1",
"MOISTURIZING_SOCK_GLOVE": "Process #1",
"BOOK_DOCUMENT_STAND": "Process #1",
"HUBCAP_WHEEL_COVER": "Process #1",
"WIPER_BLADE": "Process #1",
"ELECTRONIC_COMPONENT_TERMINAL": "Process #1",
"SEWING_PATTERN": "Process #1",
"HAMMOCK": "Process #1",
"WATER_PLAY_SPRINKLER": "Process #1",
"RULER": "Process #1",
"FURNITURE_CART": "Process #1",
"SHARP_PIN": "Process #1",
"SHEET_PAN": "Process #1",
"BARBECUE_TOOL_SET": "Process #1",
"WRIST_REST": "Process #1",
"NUTS": "Process #1",
"VEHICLE_GRILLE": "Process #1",
"TARGET_TOSSING_GAME": "Process #1",
"KNITTING_NEEDLE": "Process #1",
"BICYCLE_CARGO_RACK": "Process #1",
"ANTI_FATIGUE_FLOOR_MAT": "Process #1",
"BICYCLE_LIGHT": "Process #1",
"BED_RAIL": "Process #1",
"GRILL_SMOKER_COVER": "Process #1",
"DRAWER_SLIDE": "Process #1",
"DISC_GRINDER_TOOL": "Process #1",
"BIOMETRIC_MONITOR": "Process #1",
"BEVERAGE_INSULATOR": "Process #1",
"IRON_ON_TRANSFER_DESIGN": "Process #1",
"GARMENT_PROTECTOR_COVER": "Process #1",
"BATHROOM_CONTAINER_SET": "Process #1",
"CARPET_UPHOLSTERY_CLEANING_MACHINE": "Process #1",
"VEHICLE_EXTERIOR_GUARD": "Process #1",
"WALL_PLATE": "Process #1",
"WHEEL": "Process #1",
"ELECTROMECHANICAL_GAUGE": "Process #1",
"PACKING_MATERIAL": "Process #1",
"CYCLING_TIRE_TUBE": "Process #1",
"BOTTLE_OPENER": "Process #1",
"STRING_TRIMMER": "Process #1",
"TEMPORARY_GATE": "Process #1",
"GAME_DICE": "Process #1",
"SPORT_GOAL": "Process #1",
"LIGHT_BOX": "Process #1",
"STEERING_WHEEL_COVER": "Process #1",
"INDUSTRIAL_CASTERS": "Process #1",
"VEHICLE_BODY_PANEL": "Process #1",
"PUNCHING_BAG": "Process #1",
"BATHTUB_SHOWER_MAT": "Process #1",
"MOP_BUCKET_SET": "Process #1",
"POWER_TOOL_SET": "Process #1",
"VEHICLE_WIND_DEFLECTOR": "Process #1",
"TOY_MODEL_VEHICLE_TRACK": "Process #1",
"MAKEUP_VANITY": "Process #1",
"SLED": "Process #1",
"HANDLEBAR_GRIP": "Process #1",
"INCENSE": "Process #1",
"VEHICLE_BUMPER": "Process #1",
"FITNESS_HOOP": "Process #1",
"HOOK_LOOP_FASTENER": "Process #1",
"THREAD_CORD": "Process #1",
"BICYCLE_TRAILER": "Process #1",
"FOOD_MASHER": "Process #1",
"DRAIN_STRAINER": "Process #1",
"MINIATURE_TOY_FURNISHING": "Process #1",
"ENGINE_AIR_FILTER": "Process #1",
"BRAKE_KIT": "Process #1",
"BED_CURTAIN": "Process #1",
"FISHING_NET": "Process #1",
"VACUUM_FILTER": "Process #1",
"HEADPHONE_EARPAD": "Process #1",
"CABLE_ASSEMBLY": "Process #1",
"MECHANICAL_FASTENERS": "Process #1",
"GARLIC_PRESS": "Process #1",
"WATER_PUMP": "Process #1",
"ABRASIVE_SHEETS": "Process #1",
"BAKEWARE_SET": "Process #1",
"REINFORCED_ART_SURFACE": "Process #1",
"FENCE_PANEL": "Process #1",
"SHOWER_ENCLOSURE": "Process #1",
"TRANSFORMER": "Process #1",
"SNOW_CHAIN": "Process #1",
"DECORATIVE_MAGNET": "Process #1",
"BOLTS": "Process #1",
"TOW_HITCH": "Process #1",
"CAMERA_STAGE_LIGHTING_MODIFIER": "Process #1",
"HARDWARE_CLAMP_VISE": "Process #1",
"PET_DOOR": "Process #1",
"INCENSE_HOLDER": "Process #1",
"SNOW_PANT": "Process #1",
"ELECTRONIC_CIGARETTE": "Process #1",
"PET_PLACEMAT": "Process #1",
"SKIN_PROTECTANT": "Process #1",
"SPORT_FACE_MASK": "Process #1",
"COLLECTIBLE_CARD": "Process #1",
"ELECTRIC_LANTERN": "Process #1",
"MOUNT_BRACKET": "Process #1",
"PORTABLE_FREESTANDING_SHELTER": "Process #1",
"POTABLE_WATER_FILTER": "Process #1",
"STORAGE_COVER": "Process #1",
"TABLE_RUNNER": "Process #1",
"CARBURETOR": "Process #1",
"COMPOST_BIN": "Process #1",
"DESK_PAD": "Process #1",
"DRIP_IRRIGATION_KIT": "Process #1",
"ELECTRICAL_HOUSING": "Process #1",
"FLASH_CARD": "Process #1",
"FUNNEL": "Process #1",
"GARDEN_TOOL_SET": "Process #1",
"GASKETS": "Process #1",
"GLUCOSE_METER": "Process #1",
"GRIDDLE_PLATE": "Process #1",
"HEAT_PRESS": "Process #1",
"HOT_TUB": "Process #1",
"LOOSE_CUT_GEM": "Process #1",
"OIL_FILTER": "Process #1",
"PADDLEBOARD": "Process #1",
"PICNIC_HOLDER": "Process #1",
"ROTATING_TRAY": "Process #1",
"SEWING_TOOL_SET": "Process #1",
"SPARK_PLUG": "Process #1",
"SPINNING_TOY_TOP": "Process #1",
"STETHOSCOPE": "Process #1",
"TEA_INFUSER": "Process #1",
"UTILITY_MAGNET": "Process #1",
"VEHICLE_RAIL": "Process #1",
"ALARM": "Process #1",
"ASHTRAY": "Process #1",
"BABY_RATTLE": "Process #1",
"BARBELL": "Process #1",
"CHAIR_MAT": "Process #1",
"CLIMBING_PLANT_SUPPORT_STRUCTURE": "Process #1",
"CONTROLLER": "Process #1",
"COOKING_CONTAINER": "Process #1",
"DOLL_CLOTHING": "Process #1",
"ELECTRONIC_LEARNING_TOY": "Process #1",
"EPILATOR": "Process #1",
"FOOTREST": "Process #1",
"GREENHOUSE": "Process #1",
"HARD_DRIVE_ENCLOSURE": "Process #1",
"NAIL_FILE": "Process #1",
"PICTURE_HANGER": "Process #1",
"PRELOADED_ELECTRONIC_GAME": "Process #1",
"SAFETY_MASK_REPLACEMENT_FILTER": "Process #1",
"SHEET_PAPER": "Process #1",
"SOLID_FIRE_FUEL": "Process #1",
"STRENGTH_TRAINING_MACHINE": "Process #1",
"VEHICLE_LIGHTING_CONVERSION_KIT": "Process #1",
"VEHICLE_SAFETY_CAMERA": "Process #1",
"WEAPON_CASE": "Process #1",
"BICYCLE_SEAT": "Process #1",
"BOTTLE_RACK": "Process #1",
"CORD_MANAGEMENT_COVER": "Process #1",
"GARLAND": "Process #1",
"GLITTER": "Process #1",
"IMPACT_PROTECTION_GEAR": "Process #1",
"LASER_PRINTER_TONER": "Process #1",
"LEVEL": "Process #1",
"MOP": "Process #1",
"MOUNTED_STORAGE_SYSTEM_KIT": "Process #1",
"MUSICAL_INSTRUMENT_TOY": "Process #1",
"PARTY_DECORATION_PACK": "Process #1",
"SOIL": "Process #1",
"STRINGED_INSTRUMENTS": "Process #1",
"THERMOPLASTIC_FILAMENT": "Process #1",
"VACUUM_SEALER_MACHINE": "Process #1",
"BATH_TOY": "Process #1",
"COSMETIC_NAIL_SET": "Process #1",
"ELECTRIC_CIRCUIT_TESTING_DEVICE": "Process #1",
"HOSE_PIPE_FITTING": "Process #1",
"SQUEEZE_TOY": "Process #1",
"VEHICLE_INTERIOR_SHADE": "Process #1",
"BAKING_STONE": "Process #1",
"BRAKE_ROTOR": "Process #1",
"ELECTRONIC_CIGARETTE_LIQUID": "Process #1",
"ELECTROSHOCK_WEAPON": "Process #1",
"GUN_SLING": "Process #1",
"LIQUID_FUEL_CONTAINER": "Process #1",
"POOL_VACUUM": "Process #1",
"PRESSER_FOOT": "Process #1",
"SODA_MAKER": "Process #1",
"SPORT_TARGET": "Process #1",
"TOY_STROLLER": "Process #1",
"EYEGLASS_FRAME": "Process #1",
"ELECTRONIC_WIRE": "Process #1",
"POWER_CONVERTER": "Process #1",
"AUTOMOTIVE_HELMET": "Process #1",
"SNOWSUIT": "Process #1",
"DUPATTA": "Process #1",
"NECKTIE": "Process #1",
"FOOT_SCRAPER": "Process #1",
"SATELLITE_RECEIVER": "Process #1",
"UNDERGARMENT_SLIP": "Process #1",
"BUCKLE": "Process #1",
"EYEGLASS_CASE": "Process #1",
"ARM_SLEEVE": "Process #1",
"CUFF_LINK": "Process #1",
"AUDIO_MIXING_CONSOLE": "Process #1",
"HOT_GLUE_GUN": "Process #1",
"SUSPENDER": "Process #1",
"BASE_LAYER_APPAREL_SET": "Process #1",
"OVERALLS": "Process #1",
"MEDICAL_SCRUB_SET": "Process #1"

};

function addProcess(node) {
  const text = node.text().trim();
  const pt = text.split('/')[0].trim();

  const process = ptProcessMap[pt] ? ptProcessMap[pt] : 'NO RE PT';
  node.append(`<span class="process" style="color: red; display: none;">${process}</span>`);

  node.on({
    mouseover: function() {
      $(this).find('.process').show();
    },
    mouseout: function() {
      $(this).find('.process').hide();
    }
  });
}

setTimeout(() => {
  $('h3[style="display: inline-block;"]').each(function() {
    addProcess($(this));
  });
}, 2000);
