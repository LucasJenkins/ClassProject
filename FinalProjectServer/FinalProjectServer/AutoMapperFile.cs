using DotnetAssessmentSocialMedia.Data.Entities;
using DotnetAssessmentSocialMedia.Dtos;
using FinalProjectServer.Data.Entities;
using FinalProjectServer.Dtos;
using Profile = AutoMapper.File;

namespace DotnetAssessmentSocialMedia
{
    public class AutoMapperFile : File
    {
        public AutoMapperFile()
        {
           

            CreateMap<FileResponseDto, File>();
                .ForMember(dest => dest.Credentials, opt => opt.MapFrom(src => src.Credentials))
                .ForMember(dest => dest.Profile, opt => opt.MapFrom(src => src.Profile))
                .ForAllOtherMembers(opts => opts.Ignore());

            CreateMap<FileUploadDto, File>();


            CreateMap<CreateUserDto, User>()
                .ForMember(dest => dest.Credentials, opt => opt.MapFrom(src => src.Credentials))
                .ForMember(dest => dest.Profile, opt => opt.MapFrom(src => src.Profile))
                .ForAllOtherMembers(opts => opts.Ignore());

            CreateMap<Credentials, CredentialsDto>();

            CreateMap<Profile, ProfileDto>();

            CreateMap<User, UserResponseDto>()
                .ForMember(
                    dest => dest.Username,
                    opt => opt.MapFrom(src => src.Credentials.Username)
                );


        }
    }
}