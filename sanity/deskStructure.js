const workSection = ['job', 'language', 'publication', 'school', 'skill'];
const freeTimeSection = [
  'book',
  'podcast',
  'randomFact',
  'tvSeries',
  'videoGame',
];
const sharedSection = ['shortText', 'skillIcon'];

export const customStructure = (S) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Work')
        .child(
          S.list()
            .title('Work Documents')
            .items(
              workSection.map((section) => S.documentTypeListItem(section))
            )
        ),
      S.listItem()
        .title('Free Time')
        .child(
          S.list()
            .title('Free Time Documents')
            .items(
              freeTimeSection.map((section) => S.documentTypeListItem(section))
            )
        ),
      S.listItem()
        .title('Shared')
        .child(
          S.list()
            .title('Shared Documents')
            .items(
              sharedSection.map((section) => S.documentTypeListItem(section))
            )
        ),
    ]);
