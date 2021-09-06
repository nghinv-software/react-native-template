/**
 * Created by nghinv on Mon Sep 06 2021
 * Copyright (c) 2021 nguyennghidt6@gmail.com
 */

type TitleType = 'Fix bug' | 'Feature' | 'Update';

interface DetailType {
  title: TitleType;
  contents: string[],
}

interface VersionLogsType {
  buildDate: string;
  version: number;
  detail: DetailType[];
}

interface VersionType {
  version: string;
}

type VersionLogsDataType = Omit<VersionLogsType, 'version'> & VersionType;

const VersionLogs: VersionLogsDataType[] = [];

export function AddLog({
  buildDate,
  version,
  detail,
}: VersionLogsType) {
  const data = {
    buildDate,
    version: `V${version}`,
    detail: detail.map(d => ({
      title: d.title,
      contents: d.contents.map(content => `- ${content}`),
    })),
  };

  VersionLogs.push(data);
}

export {
  VersionLogs,
};
