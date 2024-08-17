import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export enum KeyCodes {
  ENTER = '@10',
  BACK_SPACE = '@8',
  TAB = '@9',
  SHIFT = '@16',
  CONTROL = '@17',
  ALT = '@18',
  PAUSE = '@19',
  CAPS_LOCK = '@20',
  ESCAPE = '@27',
  SPACE = '@32',
  PAGE_UP = '@33',
  PAGE_DOWN = '@34',
  END = '@35',
  HOME = '@36',
  LEFT = '@37',
  UP = '@38',
  RIGHT = '@39',
  DOWN = '@40',
  COMMA = '@44',
  MINUS = '@45',
  PERIOD = '@46',
  SLASH = '@47',
  KEY_0 = '@48',
  KEY_1 = '@49',
  KEY_2 = '@50',
  KEY_3 = '@51',
  KEY_4 = '@52',
  KEY_5 = '@53',
  KEY_6 = '@54',
  KEY_7 = '@55',
  KEY_8 = '@56',
  KEY_9 = '@57',
  SEMICOLON = '@59',
  EQUALS = '@61',
  A = '@65',
  B = '@66',
  C = '@67',
  D = '@68',
  E = '@69',
  F = '@70',
  G = '@71',
  H = '@72',
  I = '@73',
  J = '@74',
  K = '@75',
  L = '@76',
  M = '@77',
  N = '@78',
  O = '@79',
  P = '@80',
  Q = '@81',
  R = '@82',
  S = '@83',
  T = '@84',
  U = '@85',
  V = '@86',
  W = '@87',
  X = '@88',
  Y = '@89',
  Z = '@90',
  OPEN_BRACKET = '@91',
  NUMPAD_0 = '@96',
  NUMPAD_1 = '@97',
  NUMPAD_2 = '@98',
  NUMPAD_3 = '@99',
  NUMPAD_4 = '@100',
  NUMPAD_5 = '@101',
  NUMPAD_6 = '@102',
  NUMPAD_7 = '@103',
  NUMPAD_8 = '@104',
  NUMPAD_9 = '@105',
  MULTIPLY = '@106',
  ADD = '@107',
  SUBTRACT = '@109',
  DECIMAL = '@110',
  DIVIDE = '@111',
  DELETE = '@127',
  NUM_LOCK = '@144',
  SCROLL_LOCK = '@145',
  F1 = '@112',
  F2 = '@113',
  F3 = '@114',
  F4 = '@115',
  F5 = '@116',
  F6 = '@117',
  F7 = '@118',
  F8 = '@119',
  F9 = '@120',
  F10 = '@121',
  F11 = '@122',
  F12 = '@123',
  F13 = '@61440',
  F14 = '@61441',
  F15 = '@61442',
  F16 = '@61443',
  F17 = '@61444',
  F18 = '@61445',
  F19 = '@61446',
  F20 = '@61447',
  F21 = '@61448',
  F22 = '@61449',
  F23 = '@61450',
  F24 = '@61451',
  PRINT_SCREEN = '@154',
  INSERT = '@155',
  HELP = '@156',
  META = '@157',
  BLOCK_QUOTE = '@192',
  QUOTE = '@222',
  KP_UP = '@224',
  KP_DOWN = '@225',
  KP_LEFT = '@226',
  KP_RIGHT = '@227',
  DEAD_GRAVE = '@128',
  DEAD_ACUTE = '@129',
  DEAD_CIRCUMFLEX = '@130',
  DEAD_TILDE = '@131',
  DEAD_MACRON = '@132',
  DEAD_BREVE = '@133',
  DEAD_ABOVEDOT = '@134',
  DEAD_DIAERESIS = '@135',
  DEAD_ABOVERING = '@136',
  DEAD_DOUBLEACUTE = '@137',
  DEAD_CARON = '@138',
  DEAD_CEDILLA = '@139',
  DEAD_OGONEK = '@140',
  DEAD_IOTA = '@141',
  DEAD_VOICED_SOUND = '@142',
  DEAD_SEMIVOICED_SOUND = '@143',
  AMPERSAND = '@150',
  ASTERISK = '@151',
  QUOTEDBL = '@152',
  LESS = '@153',
  GREATER = '@160',
  BRACELEFT = '@161',
  BRACERIGHT = '@162',
  AT = '@512',
  COLON = '@513',
  CIRCUMFLEX = '@514',
  DOLLAR = '@515',
  EURO_SIGN = '@516',
  EXCLAMATION_MARK = '@517',
  INVERTED_EXCLAMATION_MARK = '@518',
  LEFT_PARENTHESIS = '@519',
  RIGHT_PARENTHESIS = '@522',
  NUMBER_SIGN = '@520',
  PLUS = '@521',
  UNDERSCORE = '@523',
  WINDOWS = '@524',
  CONTEXT_MENU = '@525',
  CONVERT = '@28',
  NONCONVERT = '@29',
  ALPHANUMERIC = '@240',
  KATAKANA = '@241',
  HIRAGANA = '@242',
  FULL_WIDTH = '@243',
  HALF_WIDTH = '@244',
  ROMAN_CHARACTERS = '@245',
  ALL_CANDIDATES = '@256',
  PREVIOUS_CANDIDATE = '@257',
  CODE_INPUT = '@258',
  KANA_LOCK = '@262',
  INPUT_METHOD_ON_OFF = '@263',
  ACCEPT = '@30',
  KANA = '@21',
  KANJI = '@25',
  JAPANESE_KATAKANA = '@259',
  JAPANESE_HIRAGANA = '@260',
  JAPANESE_ROMAN = '@261',
  CUT = '@65489',
  COPY = '@65485',
  PASTE = '@65487',
  UNDO = '@65483',
  AGAIN = '@65481',
  FIND = '@65488',
  PROPS = '@65482',
  STOP = '@65480',
  COMPOSE = '@65312',
  ALT_GRAPH = '@65406',
}
