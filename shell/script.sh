# Created by nghinv on Thu Jul 02 2020
# Copyright (c) 2020 nguyennghidt6@gmail.com

#!/usr/bin/env bash

copySplash() {
  splashPath="src/assets/splash/splash.png"
  androidResPath="android/app/src/main/res"

  cp $splashPath "$androidResPath/drawable-hdpi"
  cp $splashPath "$androidResPath/drawable-mdpi"
  cp $splashPath "$androidResPath/drawable-xhdpi"
  cp $splashPath "$androidResPath/drawable-xxhdpi"
  cp $splashPath "$androidResPath/drawable-xxxhdpi"

  echo "COPPY SPLASH IMAGE TO ANDROID DRAWABLE SUCCESS"
}

codepush() {
  descriptionCode=$1;
  echo ""
  echo ""
  echo ""
  echo ""
  echo "Starting the process-----------> Code push";
  echo ""
  echo "---------------------->IOS"
  code-push release-react ios-AppName ios --description "$descriptionCode"
  code-push promote ios-AppName Staging Production

  echo ""
  echo "---------------------->Android"
  code-push release-react android-AppName android --description "$descriptionCode"
  code-push promote android-AppName Staging Production

  echo ""
  echo ""
  echo "---------------------->SUCCESS"
}
