import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

// Type definitions
export type FontFamily =
  | 'PRETENDARD'
  | 'OWNGLYPH'
  | 'GANGWON_EDU'
  | 'NANUM_MYEONGJO'
  | 'TMONEY_ROUND_WIND';
export type FontSize = 'NORMAL' | 'LARGER' | 'SMALLER';
export type BackgroundColor =
  | 'WHITE'
  | 'SKY_BLUE'
  | 'PINK_BEIGE'
  | 'IVORY'
  | 'LIGHT_CORAL';
export type BackgroundPattern = 'NONE' | 'PAPER' | 'CHECK' | 'SMALL_FLOWER';
export type PhotoFrameStyle = 'BASIC' | 'ARCH' | 'ROUNDED' | 'FRAME';
export type PersonRole =
  | 'GROOM'
  | 'BRIDE'
  | 'GROOM_FATHER'
  | 'GROOM_MOTHER'
  | 'BRIDE_FATHER'
  | 'BRIDE_MOTHER';
export type DeceasedDisplayType =
  | 'NONE'
  | 'COLOR'
  | 'PREFIX_GOH'
  | 'CHRYSANTHEMUM';
export type PlaceMapType = 'NAVER' | 'KAKAO' | 'GOOGLE';
export type AccountDesignType = 'BASIC' | 'BUTTON' | 'ACCORDION';
export type GalleryType = 'SWIPE' | 'GRID' | 'CHECKERBOARD';
export type AttendanceType =
  | 'HEADCOUNT'
  | 'COMPANION_NAME'
  | 'CONTACT'
  | 'MEAL'
  | 'ETC';

export interface ThemeRequest {
  fontFamily: FontFamily;
  fontSize: FontSize;
  backgroundColor: BackgroundColor;
  backgroundPattern: BackgroundPattern;
  disableZoom: boolean;
  enableScrollEffect: boolean;
}

export interface IntroLayoutRequest {
  layoutType: string;
  photoFrameStyle: PhotoFrameStyle;
  imageName?: string;
}

export interface PersonInfoRequest {
  role: PersonRole;
  firstName: string;
  lastName: string;
  phone: string;
  isDeceased: boolean;
}

export interface PersonBasicInfoRequest {
  personInfoList: PersonInfoRequest[];
  deceasedDisplayType: DeceasedDisplayType;
}

export interface WeddingDateRequest {
  weddingDateTime: string;
  displayCalendar: boolean;
  displayDDay: boolean;
}

export interface WeddingPlaceRequest {
  name: string;
  description: string;
  address: string;
  showMap: boolean;
  placeMapType: PlaceMapType;
}

export interface InvitationMessageRequest {
  title: string;
  content: string;
}

export interface BackgroundMusicRequest {
  musicName: string;
  autoPlay: boolean;
}

export interface TransportationGuideRequest {
  transportationName: string;
  guideDescription: string;
}

export interface AccountDetailRequest {
  ownerName: string;
  bankName: string;
  accountNumber: string;
  kakaoPayEnabled: boolean;
}

export interface AccountGroupRequest {
  groupName: string;
  accountDetails: AccountDetailRequest[];
}

export interface AccountInfoRequest {
  title: string;
  content: string;
  designType: AccountDesignType;
  groomAccountGroup: AccountGroupRequest;
  brideAccountGroup: AccountGroupRequest;
}

export interface GalleryRequest {
  name: string;
  type: GalleryType;
  usePopUpView: boolean;
  images: string[];
}

export interface AttendanceCheckRequest {
  title: string;
  content: string;
  buttonText: string;
  type: AttendanceType;
}

export interface EndingRequest {
  title: string;
  content: string;
  imageName: string;
}

export interface WeddingInvitationState {
  theme: ThemeRequest;
  introLayout: IntroLayoutRequest;
  personBasicInfoRequest: PersonBasicInfoRequest;
  weddingDateRequest: WeddingDateRequest;
  weddingPlaceRequest: WeddingPlaceRequest;
  invitationMessageRequest: InvitationMessageRequest;
  backgroundMusicRequest: BackgroundMusicRequest;
  transportationGuideRequest: TransportationGuideRequest;
  accountInfoRequest: AccountInfoRequest;
  galleryRequest: GalleryRequest;
  attendanceCheckRequest: AttendanceCheckRequest;
  endingRequest: EndingRequest;
}

export interface WeddingInvitationActions {
  // Theme Actions
  updateTheme: (theme: Partial<ThemeRequest>) => void;
  setFontFamily: (fontFamily: FontFamily) => void;
  setFontSize: (fontSize: FontSize) => void;
  setBackgroundColor: (backgroundColor: BackgroundColor) => void;
  setBackgroundPattern: (backgroundPattern: BackgroundPattern) => void;
  setDisableZoom: (disableZoom: boolean) => void;
  setEnableScrollEffect: (enableScrollEffect: boolean) => void;

  // Intro Layout Actions
  updateIntroLayout: (introLayout: Partial<IntroLayoutRequest>) => void;
  setLayoutType: (layoutType: string) => void;
  setPhotoFrameStyle: (photoFrameStyle: PhotoFrameStyle) => void;
  setImageName: (imageName?: string) => void;

  // Person Basic Info Actions
  updatePersonBasicInfo: (
    personBasicInfo: Partial<PersonBasicInfoRequest>
  ) => void;
  setPersonInfoList: (personInfoList: PersonInfoRequest[]) => void;
  addPersonInfo: (personInfo: PersonInfoRequest) => void;
  removePersonInfo: (index: number) => void;
  updatePersonInfo: (
    index: number,
    personInfo: Partial<PersonInfoRequest>
  ) => void;
  setDeceasedDisplayType: (deceasedDisplayType: DeceasedDisplayType) => void;

  // Wedding Date Actions
  updateWeddingDate: (weddingDate: Partial<WeddingDateRequest>) => void;
  setWeddingDateTime: (weddingDateTime: string) => void;
  setDisplayCalendar: (displayCalendar: boolean) => void;
  setDisplayDDay: (displayDDay: boolean) => void;

  // Wedding Place Actions
  updateWeddingPlace: (weddingPlace: Partial<WeddingPlaceRequest>) => void;
  setPlaceName: (name: string) => void;
  setPlaceDescription: (description: string) => void;
  setPlaceAddress: (address: string) => void;
  setShowMap: (showMap: boolean) => void;
  setPlaceMapType: (placeMapType: PlaceMapType) => void;

  // Invitation Message Actions
  updateInvitationMessage: (
    invitationMessage: Partial<InvitationMessageRequest>
  ) => void;
  setInvitationTitle: (title: string) => void;
  setInvitationContent: (content: string) => void;

  // Background Music Actions
  updateBackgroundMusic: (
    backgroundMusic: Partial<BackgroundMusicRequest>
  ) => void;
  setMusicName: (musicName: string) => void;
  setAutoPlay: (autoPlay: boolean) => void;

  // Transportation Guide Actions
  updateTransportationGuide: (
    transportationGuide: Partial<TransportationGuideRequest>
  ) => void;
  setTransportationName: (transportationName: string) => void;
  setGuideDescription: (guideDescription: string) => void;

  // Account Info Actions
  updateAccountInfo: (accountInfo: Partial<AccountInfoRequest>) => void;
  setAccountTitle: (title: string) => void;
  setAccountContent: (content: string) => void;
  setAccountDesignType: (designType: AccountDesignType) => void;
  updateGroomAccountGroup: (
    groomAccountGroup: Partial<AccountGroupRequest>
  ) => void;
  updateBrideAccountGroup: (
    brideAccountGroup: Partial<AccountGroupRequest>
  ) => void;
  addGroomAccount: (accountDetail: AccountDetailRequest) => void;
  addBrideAccount: (accountDetail: AccountDetailRequest) => void;
  removeGroomAccount: (index: number) => void;
  removeBrideAccount: (index: number) => void;
  updateGroomAccount: (
    index: number,
    accountDetail: Partial<AccountDetailRequest>
  ) => void;
  updateBrideAccount: (
    index: number,
    accountDetail: Partial<AccountDetailRequest>
  ) => void;

  // Gallery Actions
  updateGallery: (gallery: Partial<GalleryRequest>) => void;
  setGalleryName: (name: string) => void;
  setGalleryType: (type: GalleryType) => void;
  setUsePopUpView: (usePopUpView: boolean) => void;
  setGalleryImages: (images: string[]) => void;
  addGalleryImage: (image: string) => void;
  removeGalleryImage: (index: number) => void;

  // Attendance Check Actions
  updateAttendanceCheck: (
    attendanceCheck: Partial<AttendanceCheckRequest>
  ) => void;
  setAttendanceTitle: (title: string) => void;
  setAttendanceContent: (content: string) => void;
  setAttendanceButtonText: (buttonText: string) => void;
  setAttendanceType: (type: AttendanceType) => void;

  // Ending Actions
  updateEnding: (ending: Partial<EndingRequest>) => void;
  setEndingTitle: (title: string) => void;
  setEndingContent: (content: string) => void;
  setEndingImageName: (imageName: string) => void;

  // Global Actions
  resetStore: () => void;
  setFullState: (state: WeddingInvitationState) => void;
}

// Default state
const defaultState: WeddingInvitationState = {
  theme: {
    fontFamily: 'PRETENDARD',
    fontSize: 'NORMAL',
    backgroundColor: 'WHITE',
    backgroundPattern: 'NONE',
    disableZoom: true,
    enableScrollEffect: true,
  },
  introLayout: {
    layoutType: 'string',
    photoFrameStyle: 'BASIC',
    imageName: 'string',
  },
  personBasicInfoRequest: {
    personInfoList: [
      {
        role: 'GROOM',
        firstName: 'string',
        lastName: 'string',
        phone: 'string',
        isDeceased: true,
      },
    ],
    deceasedDisplayType: 'NONE',
  },
  weddingDateRequest: {
    weddingDateTime: new Date().toISOString(),
    displayCalendar: true,
    displayDDay: true,
  },
  weddingPlaceRequest: {
    name: 'string',
    description: 'string',
    address: 'string',
    showMap: true,
    placeMapType: 'NAVER',
  },
  invitationMessageRequest: {
    title: 'string',
    content: 'string',
  },
  backgroundMusicRequest: {
    musicName: 'string',
    autoPlay: true,
  },
  transportationGuideRequest: {
    transportationName: 'string',
    guideDescription: 'string',
  },
  accountInfoRequest: {
    title: 'string',
    content: 'string',
    designType: 'BASIC',
    groomAccountGroup: {
      groupName: 'string',
      accountDetails: [
        {
          ownerName: 'string',
          bankName: 'string',
          accountNumber: 'string',
          kakaoPayEnabled: true,
        },
      ],
    },
    brideAccountGroup: {
      groupName: 'string',
      accountDetails: [
        {
          ownerName: 'string',
          bankName: 'string',
          accountNumber: 'string',
          kakaoPayEnabled: true,
        },
      ],
    },
  },
  galleryRequest: {
    name: 'string',
    type: 'SWIPE',
    usePopUpView: true,
    images: ['string'],
  },
  attendanceCheckRequest: {
    title: 'string',
    content: 'string',
    buttonText: 'string',
    type: 'HEADCOUNT',
  },
  endingRequest: {
    title: 'string',
    content: 'string',
    imageName: 'string',
  },
};

export const useWeddingInvitationStore = create<
  WeddingInvitationState & WeddingInvitationActions
>()(
  devtools(
    (set, get) => ({
      ...defaultState,

      // Theme Actions
      updateTheme: (theme) =>
        set(
          (state) => ({
            theme: { ...state.theme, ...theme },
          }),
          false,
          'updateTheme'
        ),
      setFontFamily: (fontFamily) =>
        set(
          (state) => ({
            theme: { ...state.theme, fontFamily },
          }),
          false,
          'setFontFamily'
        ),
      setFontSize: (fontSize) =>
        set(
          (state) => ({
            theme: { ...state.theme, fontSize },
          }),
          false,
          'setFontSize'
        ),
      setBackgroundColor: (backgroundColor) =>
        set(
          (state) => ({
            theme: { ...state.theme, backgroundColor },
          }),
          false,
          'setBackgroundColor'
        ),
      setBackgroundPattern: (backgroundPattern) =>
        set(
          (state) => ({
            theme: { ...state.theme, backgroundPattern },
          }),
          false,
          'setBackgroundPattern'
        ),
      setDisableZoom: (disableZoom) =>
        set(
          (state) => ({
            theme: { ...state.theme, disableZoom },
          }),
          false,
          'setDisableZoom'
        ),
      setEnableScrollEffect: (enableScrollEffect) =>
        set(
          (state) => ({
            theme: { ...state.theme, enableScrollEffect },
          }),
          false,
          'setEnableScrollEffect'
        ),

      // Intro Layout Actions
      updateIntroLayout: (introLayout) =>
        set(
          (state) => ({
            introLayout: { ...state.introLayout, ...introLayout },
          }),
          false,
          'updateIntroLayout'
        ),
      setLayoutType: (layoutType) =>
        set(
          (state) => ({
            introLayout: { ...state.introLayout, layoutType },
          }),
          false,
          'setLayoutType'
        ),
      setPhotoFrameStyle: (photoFrameStyle) =>
        set(
          (state) => ({
            introLayout: { ...state.introLayout, photoFrameStyle },
          }),
          false,
          'setPhotoFrameStyle'
        ),
      setImageName: (imageName) =>
        set(
          (state) => ({
            introLayout: { ...state.introLayout, imageName },
          }),
          false,
          'setImageName'
        ),

      // Person Basic Info Actions
      updatePersonBasicInfo: (personBasicInfo) =>
        set(
          (state) => ({
            personBasicInfoRequest: {
              ...state.personBasicInfoRequest,
              ...personBasicInfo,
            },
          }),
          false,
          'updatePersonBasicInfo'
        ),
      setPersonInfoList: (personInfoList) =>
        set(
          (state) => ({
            personBasicInfoRequest: {
              ...state.personBasicInfoRequest,
              personInfoList,
            },
          }),
          false,
          'setPersonInfoList'
        ),
      addPersonInfo: (personInfo) =>
        set(
          (state) => ({
            personBasicInfoRequest: {
              ...state.personBasicInfoRequest,
              personInfoList: [
                ...state.personBasicInfoRequest.personInfoList,
                personInfo,
              ],
            },
          }),
          false,
          'addPersonInfo'
        ),
      removePersonInfo: (index) =>
        set(
          (state) => ({
            personBasicInfoRequest: {
              ...state.personBasicInfoRequest,
              personInfoList:
                state.personBasicInfoRequest.personInfoList.filter(
                  (_, i) => i !== index
                ),
            },
          }),
          false,
          'removePersonInfo'
        ),
      updatePersonInfo: (index, personInfo) =>
        set(
          (state) => ({
            personBasicInfoRequest: {
              ...state.personBasicInfoRequest,
              personInfoList: state.personBasicInfoRequest.personInfoList.map(
                (person, i) =>
                  i === index ? { ...person, ...personInfo } : person
              ),
            },
          }),
          false,
          'updatePersonInfo'
        ),
      setDeceasedDisplayType: (deceasedDisplayType) =>
        set(
          (state) => ({
            personBasicInfoRequest: {
              ...state.personBasicInfoRequest,
              deceasedDisplayType,
            },
          }),
          false,
          'setDeceasedDisplayType'
        ),

      // Wedding Date Actions
      updateWeddingDate: (weddingDate) =>
        set(
          (state) => ({
            weddingDateRequest: { ...state.weddingDateRequest, ...weddingDate },
          }),
          false,
          'updateWeddingDate'
        ),
      setWeddingDateTime: (weddingDateTime) =>
        set(
          (state) => ({
            weddingDateRequest: {
              ...state.weddingDateRequest,
              weddingDateTime,
            },
          }),
          false,
          'setWeddingDateTime'
        ),
      setDisplayCalendar: (displayCalendar) =>
        set(
          (state) => ({
            weddingDateRequest: {
              ...state.weddingDateRequest,
              displayCalendar,
            },
          }),
          false,
          'setDisplayCalendar'
        ),
      setDisplayDDay: (displayDDay) =>
        set(
          (state) => ({
            weddingDateRequest: { ...state.weddingDateRequest, displayDDay },
          }),
          false,
          'setDisplayDDay'
        ),

      // Wedding Place Actions
      updateWeddingPlace: (weddingPlace) =>
        set(
          (state) => ({
            weddingPlaceRequest: {
              ...state.weddingPlaceRequest,
              ...weddingPlace,
            },
          }),
          false,
          'updateWeddingPlace'
        ),
      setPlaceName: (name) =>
        set(
          (state) => ({
            weddingPlaceRequest: { ...state.weddingPlaceRequest, name },
          }),
          false,
          'setPlaceName'
        ),
      setPlaceDescription: (description) =>
        set(
          (state) => ({
            weddingPlaceRequest: { ...state.weddingPlaceRequest, description },
          }),
          false,
          'setPlaceDescription'
        ),
      setPlaceAddress: (address) =>
        set(
          (state) => ({
            weddingPlaceRequest: { ...state.weddingPlaceRequest, address },
          }),
          false,
          'setPlaceAddress'
        ),
      setShowMap: (showMap) =>
        set(
          (state) => ({
            weddingPlaceRequest: { ...state.weddingPlaceRequest, showMap },
          }),
          false,
          'setShowMap'
        ),
      setPlaceMapType: (placeMapType) =>
        set(
          (state) => ({
            weddingPlaceRequest: { ...state.weddingPlaceRequest, placeMapType },
          }),
          false,
          'setPlaceMapType'
        ),

      // Invitation Message Actions
      updateInvitationMessage: (invitationMessage) =>
        set(
          (state) => ({
            invitationMessageRequest: {
              ...state.invitationMessageRequest,
              ...invitationMessage,
            },
          }),
          false,
          'updateInvitationMessage'
        ),
      setInvitationTitle: (title) =>
        set(
          (state) => ({
            invitationMessageRequest: {
              ...state.invitationMessageRequest,
              title,
            },
          }),
          false,
          'setInvitationTitle'
        ),
      setInvitationContent: (content) =>
        set(
          (state) => ({
            invitationMessageRequest: {
              ...state.invitationMessageRequest,
              content,
            },
          }),
          false,
          'setInvitationContent'
        ),

      // Background Music Actions
      updateBackgroundMusic: (backgroundMusic) =>
        set(
          (state) => ({
            backgroundMusicRequest: {
              ...state.backgroundMusicRequest,
              ...backgroundMusic,
            },
          }),
          false,
          'updateBackgroundMusic'
        ),
      setMusicName: (musicName) =>
        set(
          (state) => ({
            backgroundMusicRequest: {
              ...state.backgroundMusicRequest,
              musicName,
            },
          }),
          false,
          'setMusicName'
        ),
      setAutoPlay: (autoPlay) =>
        set(
          (state) => ({
            backgroundMusicRequest: {
              ...state.backgroundMusicRequest,
              autoPlay,
            },
          }),
          false,
          'setAutoPlay'
        ),

      // Transportation Guide Actions
      updateTransportationGuide: (transportationGuide) =>
        set(
          (state) => ({
            transportationGuideRequest: {
              ...state.transportationGuideRequest,
              ...transportationGuide,
            },
          }),
          false,
          'updateTransportationGuide'
        ),
      setTransportationName: (transportationName) =>
        set(
          (state) => ({
            transportationGuideRequest: {
              ...state.transportationGuideRequest,
              transportationName,
            },
          }),
          false,
          'setTransportationName'
        ),
      setGuideDescription: (guideDescription) =>
        set(
          (state) => ({
            transportationGuideRequest: {
              ...state.transportationGuideRequest,
              guideDescription,
            },
          }),
          false,
          'setGuideDescription'
        ),

      // Account Info Actions
      updateAccountInfo: (accountInfo) =>
        set(
          (state) => ({
            accountInfoRequest: { ...state.accountInfoRequest, ...accountInfo },
          }),
          false,
          'updateAccountInfo'
        ),
      setAccountTitle: (title) =>
        set(
          (state) => ({
            accountInfoRequest: { ...state.accountInfoRequest, title },
          }),
          false,
          'setAccountTitle'
        ),
      setAccountContent: (content) =>
        set(
          (state) => ({
            accountInfoRequest: { ...state.accountInfoRequest, content },
          }),
          false,
          'setAccountContent'
        ),
      setAccountDesignType: (designType) =>
        set(
          (state) => ({
            accountInfoRequest: { ...state.accountInfoRequest, designType },
          }),
          false,
          'setAccountDesignType'
        ),
      updateGroomAccountGroup: (groomAccountGroup) =>
        set(
          (state) => ({
            accountInfoRequest: {
              ...state.accountInfoRequest,
              groomAccountGroup: {
                ...state.accountInfoRequest.groomAccountGroup,
                ...groomAccountGroup,
              },
            },
          }),
          false,
          'updateGroomAccountGroup'
        ),
      updateBrideAccountGroup: (brideAccountGroup) =>
        set(
          (state) => ({
            accountInfoRequest: {
              ...state.accountInfoRequest,
              brideAccountGroup: {
                ...state.accountInfoRequest.brideAccountGroup,
                ...brideAccountGroup,
              },
            },
          }),
          false,
          'updateBrideAccountGroup'
        ),
      addGroomAccount: (accountDetail) =>
        set(
          (state) => ({
            accountInfoRequest: {
              ...state.accountInfoRequest,
              groomAccountGroup: {
                ...state.accountInfoRequest.groomAccountGroup,
                accountDetails: [
                  ...state.accountInfoRequest.groomAccountGroup.accountDetails,
                  accountDetail,
                ],
              },
            },
          }),
          false,
          'addGroomAccount'
        ),
      addBrideAccount: (accountDetail) =>
        set(
          (state) => ({
            accountInfoRequest: {
              ...state.accountInfoRequest,
              brideAccountGroup: {
                ...state.accountInfoRequest.brideAccountGroup,
                accountDetails: [
                  ...state.accountInfoRequest.brideAccountGroup.accountDetails,
                  accountDetail,
                ],
              },
            },
          }),
          false,
          'addBrideAccount'
        ),
      removeGroomAccount: (index) =>
        set(
          (state) => ({
            accountInfoRequest: {
              ...state.accountInfoRequest,
              groomAccountGroup: {
                ...state.accountInfoRequest.groomAccountGroup,
                accountDetails:
                  state.accountInfoRequest.groomAccountGroup.accountDetails.filter(
                    (_, i) => i !== index
                  ),
              },
            },
          }),
          false,
          'removeGroomAccount'
        ),
      removeBrideAccount: (index) =>
        set(
          (state) => ({
            accountInfoRequest: {
              ...state.accountInfoRequest,
              brideAccountGroup: {
                ...state.accountInfoRequest.brideAccountGroup,
                accountDetails:
                  state.accountInfoRequest.brideAccountGroup.accountDetails.filter(
                    (_, i) => i !== index
                  ),
              },
            },
          }),
          false,
          'removeBrideAccount'
        ),
      updateGroomAccount: (index, accountDetail) =>
        set(
          (state) => ({
            accountInfoRequest: {
              ...state.accountInfoRequest,
              groomAccountGroup: {
                ...state.accountInfoRequest.groomAccountGroup,
                accountDetails:
                  state.accountInfoRequest.groomAccountGroup.accountDetails.map(
                    (account, i) =>
                      i === index ? { ...account, ...accountDetail } : account
                  ),
              },
            },
          }),
          false,
          'updateGroomAccount'
        ),
      updateBrideAccount: (index, accountDetail) =>
        set(
          (state) => ({
            accountInfoRequest: {
              ...state.accountInfoRequest,
              brideAccountGroup: {
                ...state.accountInfoRequest.brideAccountGroup,
                accountDetails:
                  state.accountInfoRequest.brideAccountGroup.accountDetails.map(
                    (account, i) =>
                      i === index ? { ...account, ...accountDetail } : account
                  ),
              },
            },
          }),
          false,
          'updateBrideAccount'
        ),

      // Gallery Actions
      updateGallery: (gallery) =>
        set(
          (state) => ({
            galleryRequest: { ...state.galleryRequest, ...gallery },
          }),
          false,
          'updateGallery'
        ),
      setGalleryName: (name) =>
        set(
          (state) => ({
            galleryRequest: { ...state.galleryRequest, name },
          }),
          false,
          'setGalleryName'
        ),
      setGalleryType: (type) =>
        set(
          (state) => ({
            galleryRequest: { ...state.galleryRequest, type },
          }),
          false,
          'setGalleryType'
        ),
      setUsePopUpView: (usePopUpView) =>
        set(
          (state) => ({
            galleryRequest: { ...state.galleryRequest, usePopUpView },
          }),
          false,
          'setUsePopUpView'
        ),
      setGalleryImages: (images) =>
        set(
          (state) => ({
            galleryRequest: { ...state.galleryRequest, images },
          }),
          false,
          'setGalleryImages'
        ),
      addGalleryImage: (image) =>
        set(
          (state) => ({
            galleryRequest: {
              ...state.galleryRequest,
              images: [...state.galleryRequest.images, image],
            },
          }),
          false,
          'addGalleryImage'
        ),
      removeGalleryImage: (index) =>
        set(
          (state) => ({
            galleryRequest: {
              ...state.galleryRequest,
              images: state.galleryRequest.images.filter((_, i) => i !== index),
            },
          }),
          false,
          'removeGalleryImage'
        ),

      // Attendance Check Actions
      updateAttendanceCheck: (attendanceCheck) =>
        set(
          (state) => ({
            attendanceCheckRequest: {
              ...state.attendanceCheckRequest,
              ...attendanceCheck,
            },
          }),
          false,
          'updateAttendanceCheck'
        ),
      setAttendanceTitle: (title) =>
        set(
          (state) => ({
            attendanceCheckRequest: { ...state.attendanceCheckRequest, title },
          }),
          false,
          'setAttendanceTitle'
        ),
      setAttendanceContent: (content) =>
        set(
          (state) => ({
            attendanceCheckRequest: {
              ...state.attendanceCheckRequest,
              content,
            },
          }),
          false,
          'setAttendanceContent'
        ),
      setAttendanceButtonText: (buttonText) =>
        set(
          (state) => ({
            attendanceCheckRequest: {
              ...state.attendanceCheckRequest,
              buttonText,
            },
          }),
          false,
          'setAttendanceButtonText'
        ),
      setAttendanceType: (type) =>
        set(
          (state) => ({
            attendanceCheckRequest: { ...state.attendanceCheckRequest, type },
          }),
          false,
          'setAttendanceType'
        ),

      // Ending Actions
      updateEnding: (ending) =>
        set(
          (state) => ({
            endingRequest: { ...state.endingRequest, ...ending },
          }),
          false,
          'updateEnding'
        ),
      setEndingTitle: (title) =>
        set(
          (state) => ({
            endingRequest: { ...state.endingRequest, title },
          }),
          false,
          'setEndingTitle'
        ),
      setEndingContent: (content) =>
        set(
          (state) => ({
            endingRequest: { ...state.endingRequest, content },
          }),
          false,
          'setEndingContent'
        ),
      setEndingImageName: (imageName) =>
        set(
          (state) => ({
            endingRequest: { ...state.endingRequest, imageName },
          }),
          false,
          'setEndingImageName'
        ),

      // Global Actions
      resetStore: () => set(defaultState, false, 'resetStore'),
      setFullState: (state) => set(state, false, 'setFullState'),
    }),
    {
      name: 'wedding-invitation-store',
    }
  )
);

// Selector hooks for better performance
export const useTheme = () => useWeddingInvitationStore((state) => state.theme);
export const useIntroLayout = () =>
  useWeddingInvitationStore((state) => state.introLayout);
export const usePersonBasicInfo = () =>
  useWeddingInvitationStore((state) => state.personBasicInfoRequest);
export const useWeddingDate = () =>
  useWeddingInvitationStore((state) => state.weddingDateRequest);
export const useWeddingPlace = () =>
  useWeddingInvitationStore((state) => state.weddingPlaceRequest);
export const useInvitationMessage = () =>
  useWeddingInvitationStore((state) => state.invitationMessageRequest);
export const useBackgroundMusic = () =>
  useWeddingInvitationStore((state) => state.backgroundMusicRequest);
export const useTransportationGuide = () =>
  useWeddingInvitationStore((state) => state.transportationGuideRequest);
export const useAccountInfo = () =>
  useWeddingInvitationStore((state) => state.accountInfoRequest);
export const useGallery = () =>
  useWeddingInvitationStore((state) => state.galleryRequest);
export const useAttendanceCheck = () =>
  useWeddingInvitationStore((state) => state.attendanceCheckRequest);
export const useEnding = () =>
  useWeddingInvitationStore((state) => state.endingRequest);

// Action hooks for better organization
export const useThemeActions = () => {
  const {
    updateTheme,
    setFontFamily,
    setFontSize,
    setBackgroundColor,
    setBackgroundPattern,
    setDisableZoom,
    setEnableScrollEffect,
  } = useWeddingInvitationStore();

  return {
    updateTheme,
    setFontFamily,
    setFontSize,
    setBackgroundColor,
    setBackgroundPattern,
    setDisableZoom,
    setEnableScrollEffect,
  };
};

export const useIntroLayoutActions = () => {
  const { updateIntroLayout, setLayoutType, setPhotoFrameStyle, setImageName } =
    useWeddingInvitationStore();

  return {
    updateIntroLayout,
    setLayoutType,
    setPhotoFrameStyle,
    setImageName,
  };
};

export const usePersonBasicInfoActions = () => {
  const {
    updatePersonBasicInfo,
    setPersonInfoList,
    addPersonInfo,
    removePersonInfo,
    updatePersonInfo,
    setDeceasedDisplayType,
  } = useWeddingInvitationStore();

  return {
    updatePersonBasicInfo,
    setPersonInfoList,
    addPersonInfo,
    removePersonInfo,
    updatePersonInfo,
    setDeceasedDisplayType,
  };
};

export const useWeddingDateActions = () => {
  const {
    updateWeddingDate,
    setWeddingDateTime,
    setDisplayCalendar,
    setDisplayDDay,
  } = useWeddingInvitationStore();

  return {
    updateWeddingDate,
    setWeddingDateTime,
    setDisplayCalendar,
    setDisplayDDay,
  };
};

export const useWeddingPlaceActions = () => {
  const {
    updateWeddingPlace,
    setPlaceName,
    setPlaceDescription,
    setPlaceAddress,
    setShowMap,
    setPlaceMapType,
  } = useWeddingInvitationStore();

  return {
    updateWeddingPlace,
    setPlaceName,
    setPlaceDescription,
    setPlaceAddress,
    setShowMap,
    setPlaceMapType,
  };
};

export const useInvitationMessageActions = () => {
  const { updateInvitationMessage, setInvitationTitle, setInvitationContent } =
    useWeddingInvitationStore();

  return {
    updateInvitationMessage,
    setInvitationTitle,
    setInvitationContent,
  };
};

export const useBackgroundMusicActions = () => {
  const { updateBackgroundMusic, setMusicName, setAutoPlay } =
    useWeddingInvitationStore();

  return {
    updateBackgroundMusic,
    setMusicName,
    setAutoPlay,
  };
};

export const useTransportationGuideActions = () => {
  const {
    updateTransportationGuide,
    setTransportationName,
    setGuideDescription,
  } = useWeddingInvitationStore();

  return {
    updateTransportationGuide,
    setTransportationName,
    setGuideDescription,
  };
};

export const useAccountInfoActions = () => {
  const {
    updateAccountInfo,
    setAccountTitle,
    setAccountContent,
    setAccountDesignType,
    updateGroomAccountGroup,
    updateBrideAccountGroup,
    addGroomAccount,
    addBrideAccount,
    removeGroomAccount,
    removeBrideAccount,
    updateGroomAccount,
    updateBrideAccount,
  } = useWeddingInvitationStore();

  return {
    updateAccountInfo,
    setAccountTitle,
    setAccountContent,
    setAccountDesignType,
    updateGroomAccountGroup,
    updateBrideAccountGroup,
    addGroomAccount,
    addBrideAccount,
    removeGroomAccount,
    removeBrideAccount,
    updateGroomAccount,
    updateBrideAccount,
  };
};

export const useGalleryActions = () => {
  const {
    updateGallery,
    setGalleryName,
    setGalleryType,
    setUsePopUpView,
    setGalleryImages,
    addGalleryImage,
    removeGalleryImage,
  } = useWeddingInvitationStore();

  return {
    updateGallery,
    setGalleryName,
    setGalleryType,
    setUsePopUpView,
    setGalleryImages,
    addGalleryImage,
    removeGalleryImage,
  };
};

export const useAttendanceCheckActions = () => {
  const {
    updateAttendanceCheck,
    setAttendanceTitle,
    setAttendanceContent,
    setAttendanceButtonText,
    setAttendanceType,
  } = useWeddingInvitationStore();

  return {
    updateAttendanceCheck,
    setAttendanceTitle,
    setAttendanceContent,
    setAttendanceButtonText,
    setAttendanceType,
  };
};

export const useEndingActions = () => {
  const { updateEnding, setEndingTitle, setEndingContent, setEndingImageName } =
    useWeddingInvitationStore();

  return {
    updateEnding,
    setEndingTitle,
    setEndingContent,
    setEndingImageName,
  };
};

export const useGlobalActions = () => {
  const { resetStore, setFullState } = useWeddingInvitationStore();

  return {
    resetStore,
    setFullState,
  };
};

// Example usage:
/*
// In your component:
import { useTheme, useThemeActions } from './store/weddingInvitationStore';

function ThemeSettings() {
  const theme = useTheme();
  const { setFontFamily, setBackgroundColor } = useThemeActions();

  return (
    <div>
      <button onClick={() => setFontFamily('PRETENDARD')}>
        Set Font to Pretendard
      </button>
      <button onClick={() => setBackgroundColor('SKY_BLUE')}>
        Set Background to Sky Blue
      </button>
      <p>Current font: {theme.fontFamily}</p>
      <p>Current background: {theme.backgroundColor}</p>
    </div>
  );
}
*/
